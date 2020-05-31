<!DOCTYPE html>
<html lang="en">
<head>
<title>Collection - Product Monitor</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="icon" href="<?php echo base_url('assets/img/favicon.ico'); ?>" type="image/x-icon">
<link rel="stylesheet" href="<?php echo base_url('assets/css/base.css'); ?>">
</head>
<body>
    <div class="page">
        <header class="section rd-navbar-wrap">
            <nav class="rd-navbar navbar-app">
                <div class="navbar-container">
                    <div class="navbar-cell">
                        <div class="navbar-panel">
                            <button class="navbar-switch int-hamburger novi-icon" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","isolate":"[data-multi-switch]"}'></button>
                            <div class="navbar-logo">
                                <a class="navbar-logo-link" href="<?php echo base_url(); ?>">
                                    <img class="navbar-logo-default" src="<?php echo base_url('assets/img/logo-default-114x27.png'); ?>" alt="Product Monitor" width="114" height="27"/>
                                    <img class="navbar-logo-inverse" src="<?php echo base_url('assets/img/logo-inverse-114x27.png'); ?>" alt="Product Monitor" width="114" height="27"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-cell navbar-sidebar">
                        <ul class="navbar-navigation rd-navbar-nav">
                            <li class="navbar-navigation-root-item">
                                <a class="navbar-navigation-root-link" href="<?php echo base_url(); ?>">Home</a>
                            </li>
                            <li class="navbar-navigation-root-item active">
                                <a class="navbar-navigation-root-link" href="<?php echo base_url('collection'); ?>">Collection</a>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar-cell navbar-spacer"></div>
                    <div class="navbar-cell">
                        <div class="navbar-subpanel">
                            <div class="navbar-subpanel-item">
                                <button class="navbar-button navbar-info-button mdi-dots-vertical novi-icon" data-multi-switch='{"targets":".rd-navbar","scope":".rd-navbar","class":"navbar-info-active","isolate":"[data-multi-switch]"}'></button>
                                <div class="navbar-info">
                                    <a class="btn btn-secondary navbar-action-button" href="<?php echo base_url(); ?>">Save my product</a>
                                    <a class="btn btn-primary navbar-action-button" href="<?php echo base_url('collection'); ?>">Go to collection</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <section class="section section-lg bg-transparent novi-background">
            <div class="container">
                <div class="row row-50 novi-disabled">
                    <div class="col-lg-9">
                        <div class="row row-40 row-md-60">
                            <?php
                                foreach ($products as $product) {
                            ?>
                            <div class="col-12">
                                <article class="product product-horizontal">
                                    <div class="media media-lg flex-column flex-xs-row align-items-xs-center">
                                        <div class="media-left">
                                            <div class="product-figure">
                                                <a href="<?php echo base_url('product?sku=' . $product->sku); ?>">
                                                    <img class="product-image" src="<?php echo $product->photo_url; ?>" alt="<?php echo $product->name; ?>" width="372" height="290"/>
                                                </a>
                                                <?php 
                                                    if (!is_null($product->price_old)) { 
                                                        $current = (int) filter_var($product->price_current, FILTER_SANITIZE_NUMBER_INT);
                                                        $old     = (int) filter_var($product->price_old, FILTER_SANITIZE_NUMBER_INT);
                                                ?>
                                                <span class="badge badge-danger product-badge">-<?php echo 100 - round($current/$old*100, 0); ?>%</span>
                                                <?php } ?>
                                            </div>
                                        </div>
                                        <div class="media-body">
                                            <div class="product-title h6"><a href="<?php echo base_url('product?sku=' . $product->sku); ?>"><?php echo $product->name; ?></a></div>
                                            <div class="product-price">
                                                <?php if (!is_null($product->price_old)) { ?>
                                                <del><?php echo $product->price_old; ?></del>
                                                <?php } ?>
                                                <span><?php echo $product->price_current; ?></span>
                                            </div>
                                            <div class="product-text"><?php echo $product->description; ?></div>
                                            <a class="btn btn-primary product-btn" href="<?php echo base_url('product?sku=' . $product->sku); ?>">View details</a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <?php } ?>
                        </div>
                    </div>
                    <div class="col-lg-3 pull-left">
                        <div class="row row-40 row-md-50">
                            <?php if (!empty($categories)) { ?>
                            <div class="col-sm-6 col-md-4 col-lg-12">
                                <h6>Category</h6>
                                <div class="offset-xs">
                                    <?php 
                                        $n = 0;
                                        foreach ($categories as $category) { 
                                            $n++;
                                    ?>
                                    <div class="custom-control custom-checkbox">
                                        <input class="custom-control-input" type="checkbox" id="category-<?php echo $n; ?>">
                                        <label class="custom-control-label" for="#category-<?php echo $n; ?>"><?php echo $category->name; ?></label>
                                    </div>
                                    <?php } ?>
                                </div>
                            </div>
                            <?php } ?>
                            <?php if (!empty($colors)) { ?>
                            <div class="col-sm-6 col-md-4 col-lg-12">
                                <h6>Colors</h6>
                                <div class="offset-xs group-10 d-flex flex-wrap">
                                    <?php foreach ($colors as $color) { ?>
                                    <div class="checkbox-color" title="<?php echo $color->label; ?>">
                                        <input class="checkbox-color-input" type="checkbox" id="color-<?php echo $n; ?>">
                                        <label class="checkbox-color-label" for="#color-<?php echo $n; ?>" style="background: <?php echo $color->code; ?>">
                                            <span class="checkbox-color-content int-check novi-icon"></span>
                                        </label>
                                    </div>
                                    <?php } ?>
                                </div>
                            </div>
                            <?php } ?>
                            <?php if (!empty($locations)) { ?>
                            <div class="col-sm-6 col-md-4 col-lg-12">
                                <h6>Showroom</h6>
                                <div class="offset-xs">
                                    <?php foreach ($locations as $location) { ?>
                                    <div class="custom-control custom-checkbox">
                                        <input class="custom-control-input" type="checkbox" id="location-<?php echo $n; ?>">
                                        <label class="custom-control-label" for="#location-<?php echo $n; ?>"><?php echo $location->name; ?></label>
                                    </div>
                                    <?php } ?>
                                </div>
                            </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg section-footer bg-dark text-center text-lg-left context-dark novi-background">
            <div class="container">
                <div class="row row-30 align-items-lg-center justify-content-lg-between">
                    <div class="col-lg-8 col-xl-7 col-xxl-6">
                        <h3>Download now</h3>
                        <p class="h6 offset-xs">Get your own product monitor with the latest technology and design updates. It's free and white labelled by nature.</p>
                    </div>
                    <div class="col-lg-auto">
                        <a class="btn btn-lg btn-round" href="https://github.com/luqmanarifoutlook/fabelio-product-monitor" target="_blank">
                            <span class="btn-icon novi-icon mdi-github-circle"></span><span>Download on Github</span>
                        </a>
                    </div>
                </div>
                <hr class="divider footer-divider">
                <div class="row row-15 align-items-center justify-content-between footer-panel novi-disabled">
                    <div class="col-auto">
                        <!-- Copyright-->
                        <p class="rights"><span>&copy; <?php echo date('Y'); ?></span>&nbsp;<span>Luqman</span>. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="page-loader context-dark">
        <div class="page-loader-container">
            <img class="page-loader-logo" src="<?php echo base_url('assets/img/logo-default-114x27.png'); ?>" alt="Product Monitor" width="114" height="27"/>
            <svg class="page-loader-progress" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100" style="visibility: hidden;">
                <circle class="page-loader-circle clipped" cx="50" cy="50" r="48"></circle>
            </svg>
        </div>
    </div>
</body>
<script src="<?php echo base_url('assets/js/core.js'); ?>"></script>
<script src="<?php echo base_url('assets/js/script.js'); ?>"></script>
</html>