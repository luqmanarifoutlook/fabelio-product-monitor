<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Data extends CI_Model
{
    public function getProduct($id)
    {
        $query = $this->db->query("SELECT * FROM product WHERE id = '" . $id . "'");
        return $query->num_rows() ? $query->row() : null;
    }

    public function getProductBySku($sku)
    {
        $query = $this->db->query("
            SELECT
                product.*,
                GROUP_CONCAT(category.name SEPARATOR ', ') AS category_name,
                (
                    SELECT name FROM category WHERE id_product = product.id LIMIT 1
                ) AS category_similar
            FROM product
            LEFT JOIN category ON category.id_product = product.id
            WHERE sku LIKE '" . $sku . "'
            GROUP BY product.id
        ");
        return $query->num_rows() ? $query->row() : null;
    }

    public function getProductByUrl($url)
    {
        $query = $this->db->query("SELECT * FROM product WHERE url LIKE '" . $url . "'");
        return $query->num_rows() ? $query->row() : null;
    }

    public function getPhotoByProduct($id_product)
    {
        $query = $this->db->query("SELECT * FROM photo WHERE id_product = '" . $id_product . "'");
        return $query->num_rows() ? $query->result() : null;
    }

    public function getColorByProduct($id_product)
    {
        $query = $this->db->query("SELECT * FROM color WHERE id_product = '" . $id_product . "'");
        return $query->num_rows() ? $query->result() : null;
    }

    public function getSpecificationByProduct($id_product)
    {
        $query = $this->db->query("SELECT * FROM specification WHERE id_product = '" . $id_product . "'");
        return $query->num_rows() ? $query->result() : null;
    }

    public function getLocationByProduct($id_product)
    {
        $query = $this->db->query("SELECT * FROM location WHERE id_product = '" . $id_product . "' ORDER BY name");
        return $query->num_rows() ? $query->result() : null;
    }

    public function getUpdated($id)
    {
        $query = $this->db->query("SELECT * FROM updated WHERE id = '" . $id . "'");
        return $query->num_rows() ? $query->row() : null;
    }

    public function listProduct()
    {
        $query = $this->db->query("
            SELECT
                product.*,
                (
                    SELECT url FROM photo WHERE product.id = photo.id_product LIMIT 1
                ) AS photo_url
            FROM product
            ORDER BY created DESC
        ");
        return $query->num_rows() ? $query->result() : null;
    }

    public function listProductByCategory($category_name, $id_product)
    {
        $query = $this->db->query("
            SELECT 
                product.*, 
                category.name AS category_name,
                (
                    SELECT url FROM photo WHERE product.id = photo.id_product LIMIT 1
                ) AS photo_url
            FROM category
            JOIN product ON category.id_product = product.id
            WHERE category.name = '$category_name'
            AND product.id != '$id_product'
            GROUP BY product.id            
            ORDER BY created DESC
        ");
        return $query->num_rows() ? $query->result() : null;
    }

    public function listUpdated()
    {
        $query = $this->db->query("SELECT * FROM updated ORDER BY created DESC");
        return $query->num_rows() ? $query->result() : null;
    }

    public function listCategory()
    {
        $query = $this->db->query("SELECT DISTINCT(name) FROM category GROUP BY id_product, name ORDER BY name");
        return $query->num_rows() ? $query->result() : null;
    }

    public function listColor()
    {
        $query = $this->db->query("SELECT DISTINCT(code), label FROM color ORDER BY code");
        return $query->num_rows() ? $query->result() : null;
    }

    public function listLocation()
    {
        $query = $this->db->query("SELECT DISTINCT(name) FROM location ORDER BY name");
        return $query->num_rows() ? $query->result() : null;
    }

    public function setProduct($data)
    {
        if ($data['error']) {
            return null;
        }
        $data_product = array(
            'url'           => array_key_exists('url', $data) ? $data['url'] : null,
            'name'          => array_key_exists('name', $data) ? $data['name'] : null,
            'sku'           => array_key_exists('sku', $data) ? $data['sku'] : null,
            'description'   => array_key_exists('description', $data) ? $data['description'] : null,
            'price_current' => array_key_exists('price_current', $data) ? $data['price_current'] : null,
            'price_old'     => array_key_exists('price_old', $data) ? $data['price_old'] : null,
        );
        if ($this->db->insert('product', $data_product)) {
            $product = $this->getProduct($this->db->insert_id());
            if ((array_key_exists('categories', $data)) && (!is_null($data['categories']))) {
                foreach ($data['categories'] as $category) {
                    $data_category = array(
                        'id_product' => $product->id,
                        'name'       => $category,
                    );
                    $this->db->insert('category', $data_category);
                }
            }
            if ((array_key_exists('locations', $data)) && (!is_null($data['locations']))) {
                foreach ($data['locations'] as $location) {
                    $data_location = array(
                        'id_product' => $product->id,
                        'name'       => $location,
                    );
                    $this->db->insert('location', $data_location);
                }
            }
            if ((array_key_exists('photos', $data)) && (!is_null($data['photos']))) {
                foreach ($data['photos'] as $photo) {
                    $data_photo = array(
                        'id_product' => $product->id,
                        'url'        => $photo,
                    );
                    $this->db->insert('photo', $data_photo);
                }
            }
            if ((array_key_exists('specifications', $data)) && (!is_null($data['specifications']))) {
                foreach ($data['specifications'] as $specification) {
                    $data_specification = array(
                        'id_product' => $product->id,
                        'label'      => $specification['label'],
                        'point'      => $specification['point'],
                    );
                    $this->db->insert('specification', $data_specification);
                }
            }
            if ((array_key_exists('colors', $data)) && (!is_null($data['colors']))) {
                foreach ($data['colors'] as $color) {
                    $data_color = array(
                        'id_product' => $product->id,
                        'label'      => $color['label'],
                        'code'       => $color['code'],
                    );
                    $this->db->insert('color', $data_color);
                }
            }
            return $product;
        }
        return null;
    }
    public function updateProduct($data, $id_product) {
        $this->db->where('id', $id_product);
        $this->db->update('product', $data);
        return null;
    }
    public function setPrice($data) {
        if ($this->db->insert('updated', $data)) {
            return $this->getUpdated($this->db->insert_id());
        }
        return null;
    }
}
