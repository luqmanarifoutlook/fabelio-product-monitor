<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Site extends CI_Controller
{

    public function index()
    {
        $data = array(
            'error' => "",
            'url'   => "",
        );
        $this->load->view('index', $data);
    }

    public function set()
    {
        $data = array(
            'error' => "",
            'url'   => trim($this->input->post('url')),
        );
        $product = $this->data->getProductByUrl($data['url']);
        if (is_null($product)) {
            if ($html = file_get_html($data['url'])) {
                if (strpos($html->find('body', 0)->class, "catalog-product-view") !== false) {
                    if ($name = $html->find('h1.page-title', 0)->find('span', 0)) {
                        $data['name'] = trim($name->innertext);
                    }
                    if ($sku = $html->find('#productSku', 0)) {
                        $data['sku'] = trim($sku->value);
                    }
                    if ($breadcrumbs = $html->find('.breadcrumbs', 0)) {
                        $categories = array();
                        $n = 0;
                        foreach ($counter = $breadcrumbs->find('li') as $breadcrumb) {
                            $n++;
                            if (($n > 1) && ($n < count($counter))) {
                                $categories[] = trim(strip_tags($breadcrumb->innertext));
                            }
                        }
                        $data['categories'] = !empty($categories) ? $categories : null;
                    }
                    if ($info = $html->find('.product-info-main', 0)) {
                        if ($price = $info->find('.price-final_price', 0)) {
                            if ($price_current = $price->find('.price', 0)) {
                                $data['price_current'] = trim($price_current->innertext);
                            }
                            if ($price_old = $price->find('.price', 1)) {
                                $data['price_old'] = trim($price_old->innertext);
                            }
                        }
                        if ($showrooms = $info->find('.product-info__showroom-items', 0)) {
                            $locations = array();
                            foreach ($showrooms->find('.product-info__showroom-item') as $showroom) {
                                $locations[] = trim($showroom->innertext);
                            }
                            $data['locations'] = !empty($locations) ? $locations : null;
                        }
                    }
                    if ($descriptions = $html->find('#description', 0)) {
                        $texts = array();
                        foreach ($descriptions->find('p') as $description) {
                            if (trim($description->innertext) != "") {
                                $texts[] = trim(strip_tags($description->innertext));
                            }
                        }
                        $data['description'] = !empty($texts) ? join($texts, "<br/>") : null;
                    }
                    if ($attributes = $html->find('#additional-data', 0)) {
                        $texts = array();
                        foreach ($attributes->find('.product-info__attributes__row') as $attribute) {
                            if ($label = $attribute->find('.label', 0)) {
                                $text = trim($label->innertext);
                            }
                            $points = array();
                            foreach ($attribute->find('li') as $list) {
                                $point   = "";
                                $listing = false;
                                if ($point_left = $list->find('span', 0)) {
                                    $listing = true;
                                    $point .= trim($point_left->innertext) . ": ";
                                }
                                if ($point_right = $list->find('span', 1)) {
                                    $listing = true;
                                    $point .= trim($point_right->innertext);
                                }
                                if ($listing) {
                                    $points[] = "<li>" . $point . "</li>";
                                } else {
                                    $points[] = trim(strip_tags($list->innertext)) . "<br/>";
                                }
                            }
                            foreach ($attribute->find('p') as $list) {
                                $point  = "";
                                $terms  = array();
                                $splits = preg_split('/<br[^>]*>/i', trim($list->innertext));
                                foreach ($splits as $split) {
                                    if (trim(strip_tags($split)) != "") {
                                        $terms[] = trim(strip_tags($split));
                                    }
                                }
                                $point .= join($terms, "<br/>");
                                $points[] = $point . "<br/>";
                            }
                            if (!empty($points)) {
                                $texts[] = array(
                                    'label' => $text,
                                    'point' => join($points, ''),
                                );

                            }
                        }
                        $data['specifications'] = !empty($texts) ? $texts : null;
                        $images                 = array();
                        $colors                 = array();
                        foreach ($html->find('script') as $script) {
                            if (strpos($script->innertext, "mage/gallery/gallery") !== false) {
                                $photos = json_decode($script->innertext, true);
                                foreach ($photos['[data-gallery-role=gallery-placeholder]']['mage/gallery/gallery']['data'] as $photo) {
                                    $images[] = $photo['img'];
                                }
                            }
                            if (strpos($script->innertext, "Magento_Swatches/js/swatch-renderer") !== false) {
                                $options = json_decode($script->innertext, true);
                                if (array_key_exists('[data-role=swatch-options]', $options)) {
                                    foreach ($options['[data-role=swatch-options]']['Magento_Swatches/js/swatch-renderer']['jsonSwatchConfig'] as $ids) {
                                        foreach ($ids as $id) {
                                            if (strlen($id['value']) == 7) {
                                                $colors[] = array(
                                                    'code'  => $id['value'],
                                                    'label' => $id['label'],
                                                );
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        $data['photos'] = !empty($images) ? $images : null;
                        $data['colors'] = !empty($colors) ? $colors : null;
                        if (!is_null($product = $this->data->setProduct($data))) {
                            redirect(base_url('product?sku=' . $product->sku));
                        }
                        $data['error'] = "Cannot save product";
                        $this->load->view('index', $data);
                    }
                }
                $data['error'] = "Invalid product URL";
                $this->load->view('index', $data);
            }
            $data['error'] = "Invalid Fabelio URL";
            $this->load->view('index', $data);
        } else {
            redirect(base_url('product?sku=' . $product->sku));
        }
    }

    public function collection()
    {
        $data = array(
            'products'   => $this->data->listProduct(),
            'categories' => $this->data->listCategory(),
            'colors'     => $this->data->listColor(),
            'locations'  => $this->data->listLocation(),
        );
        $this->load->view('collection', $data);
    }

    public function product()
    {
        $data = array(
            'product'        => $product = $this->data->getProductBySku($this->input->get('sku')),
            'photos'         => $this->data->getPhotoByProduct($product->id),
            'colors'         => $this->data->getColorByProduct($product->id),
            'specifications' => $this->data->getSpecificationByProduct($product->id),
            'locations'      => $this->data->getLocationByProduct($product->id),
            'similars'       => $this->data->listProductByCategory($product->category_similar, $product->id),
        );
        $this->load->view('product', $data);
    }

    public function update()
    {
        if (!is_null($products = $this->data->listProduct())) {
            foreach ($products as $product) {
                $price_current = $price_old = null;
                if ($html = file_get_html($product->url)) {
                    if ($info = $html->find('.product-info-main', 0)) {
                        if ($price = $info->find('.price-final_price', 0)) {
                            if ($new_current = $price->find('.price', 0)) {
                                $price_current = trim($new_current->innertext);
                            }
                            if ($new_old = $price->find('.price', 1)) {
                                $price_old = trim($new_old->innertext);
                            }
                        }
                    }
                }
                $data_product = array();
                if ($product->price_current != $price_current) {
                    $data_price = array(
                        'id_product' => $product->id,
                        'type' => 'price_current',
                        'price_before' => $product->price_current,
                        'price_after' => $price_current,
                    );
                    $data_product['price_current'] = $price_current;
                    $this->data->setPrice($data_price);
                }
                if ($product->price_old != $price_old) {
                    $data_price = array(
                        'id_product' => $product->id,
                        'type' => 'price_old',
                        'price_before' => $product->price_old,
                        'price_after' => $price_old,
                    );
                    $data_product['price_old'] = $price_old;
                    $this->data->setPrice($data_price);
                }
                if (!empty($data_product)) {
                    $this->data->updateProduct($data_product, $product->id);
                }
            }
        }
        echo "Update complete";
    }
}
