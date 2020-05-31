<!DOCTYPE html>
<html lang="en">
<head>
<title>Product - Take Control of Your Desired Products</title>
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
                            <li class="navbar-navigation-root-item">
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
        <?php if (is_null($product)) { ?>
        <section class="section section-xl bg-transparent text-center novi-background" data-preset='{"title":"404","category":"service","reload":false,"id":"404"}'>
            <div class="container">
                <div class="row justify-content-center novi-disabled">
                    <div class="col-md-8 col-lg-6">
                        <h1>Error 404 :(</h1>
                        <h4>Sorry, but product was not found</h4>
                        <div class="button-group offset-md">
                            <a class="btn btn-lg btn-primary" href="<?php echo base_url('collection'); ?>"><span class="btn-icon int-arrow-left novi-icon"></span><span>Back to collection</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php } else { ?>
        <section class="section section-lg bg-transparent novi-background" data-preset='{"title":"Product Overview","category":"shop","reload":true,"id":"product-overview-2"}'>
            <div class="container">
                <div class="row row-50">
                    <div class="col-md-6 col-lg-7">
                        <div class="slick-modern">
                            <div class="slick-slider slider-nav" data-slick='{"slidesToShow":5,"slidesToScroll":5,"arrows":false,"asNavFor":".slider-for","focusOnSelect":true,"vertical":true}'>
                                <?php foreach ($photos as $photo) { ?>
                                <div class="slick-content"><img src="<?php echo $photo->url; ?>" alt="" width="542" height="694"/></div>
                                <?php } ?>
                            </div>
                            <div class="slick-slider slider-for" data-slick='{"arrows":false,"asNavFor":".slider-nav","autoplay":true,"autoplaySpeed":2000,"fade":true}'>
                                <?php foreach ($photos as $photo) { ?>
                                <div class="slick-content"><img src="<?php echo $photo->url; ?>" alt="" width="542" height="694"/></div>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-5">
                        <div class="product-overview pl-xxl-5">
                            <div class="product-overview-item">
                                <div class="small font-weight-normal"><?php echo $product->category_name; ?></div>
                                <h3 class="product-overview-name"><?php echo $product->name; ?></h3>
                                <div class="product-overview-price">
                                    <?php if (!is_null($product->price_old)) { ?>
                                    <del><?php echo $product->price_old; ?></del>
                                    <?php } ?>
                                    <span><?php echo $product->price_current; ?></span>
                                </div>
                            </div>
                            <?php if (!is_null($colors)) { ?>
                            <div class="product-overview-item">
                                <h6 class="product-overview-title">Color selection</h6>
                                <div class="group-10 d-flex flex-wrap">
                                    <?php
                                        $n = 0; 
                                        foreach ($colors as $color) { 
                                            $n++;
                                    ?>
                                    <div class="checkbox-color" title="<?php echo $color->label; ?>">
                                        <label class="checkbox-color-label" for="color<?php echo $n; ?>" style="background: <?php echo $color->code; ?>">
                                            <span class="checkbox-color-content int-check novi-icon"></span>
                                        </label>
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
        <section class="section section-lg bg-transparent novi-background" id="reviews" data-preset='{"title":"Product Details","category":"shop, tab","reload":true,"id":"product-details"}'>
            <div class="container">
                <div class="row justify-content-lg-end">
                    <div class="col-lg-11">
                        <div class="tab">
                            <ul class="nav nav-classic" role="tablist">
                                <li class="nav-item"><a class="nav-link h4 active" data-toggle="tab" href="#tab-number-1" role="tab" aria-selected="true">Description</a></li>
                                <?php if (!is_null($specifications)) { ?>
                                <li class="nav-item"><a class="nav-link h4" data-toggle="tab" href="#tab-number-2" role="tab" aria-selected="false">Specification</a></li>
                                <?php } ?>
                                <?php if (!is_null($locations)) { ?>
                                <li class="nav-item"><a class="nav-link h4" data-toggle="tab" href="#tab-number-3" role="tab" aria-selected="false">Showrooms</a></li>
                                <?php } ?>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="tab-number-1" role="tabpanel">
                                    <p><?php echo $product->description; ?></p>
                                </div>
                                <?php if (!is_null($specifications)) { ?>
                                <div class="tab-pane fade" id="tab-number-2" role="tabpanel">
                                    <?php foreach ($specifications as $specification) { ?>
                                    <p>
                                        <strong><?php echo $specification->label; ?></strong>
                                        <br/>
                                        <?php echo $specification->point; ?>
                                    </p>
                                    <?php } ?>
                                </div>
                                <?php } ?>
                                <?php if (!is_null($locations)) { ?>
                                <div class="tab-pane fade" id="tab-number-3" role="tabpanel">
                                    <ol>
                                    <?php 
                                        foreach ($locations as $location) {
                                            echo "<li>" . $location->name . "</li>";
                                        } 
                                    ?>
                                    </p>
                                </div>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php if (!is_null($similars)) { ?>
        <section class="section section-lg bg-transparent novi-background" data-preset='{"title":"Popular Product","category":"shop","reload":false,"id":"popular-product"}'>
            <div class="container">
                <h3>Similar products</h3>
                <div class="row row-30 row-sm-40 row-md-50">
                    <?php foreach ($similars as $similar) { ?>
                    <div class="col-6 col-md-4 col-lg-3">
                        <article class="product">
                            <div class="product-figure">
                                <img class="product-image" src="<?php echo $similar->photo_url; ?>" alt="" width="290" height="372"/>
                                <?php 
                                    if (!is_null($similar->price_old)) { 
                                        $current = (int) filter_var($similar->price_current, FILTER_SANITIZE_NUMBER_INT);
                                        $old     = (int) filter_var($similar->price_old, FILTER_SANITIZE_NUMBER_INT);
                                ?>
                                <span class="badge badge-danger product-badge">-<?php echo 100 - round($current/$old*100, 0); ?>%</span>
                                <?php } ?>
                            </div>
                            <div class="product-title h6"><a href="<?php echo base_url('product?sku=' . $similar->sku); ?>"><?php echo $similar->name; ?></a></div>
                            <div class="product-price">
                                <?php if (!is_null($similar->price_old)) { ?>
                                <del><?php echo $similar->price_old; ?></del>
                                <?php } ?>
                                <span><?php echo $similar->price_current; ?></span>
                            </div>
                        </article>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </section>
        <?php } ?>
        <?php } ?>
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