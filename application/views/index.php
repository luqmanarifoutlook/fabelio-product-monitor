<!DOCTYPE html>
<html lang="en">
<head>
<title>Product Monitor - Take Control of Your Desired Products</title>
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
                            <li class="navbar-navigation-root-item active">
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
                                    <a class="btn btn-secondary navbar-action-button" href="#!" onclick="inputLink();">Save my product</a>
                                    <a class="btn btn-primary navbar-action-button" href="<?php echo base_url('collection'); ?>">Go to collection</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <section class="section section-lg bg-gradient-animated novi-background">
            <div class="container">
                <div class="row row-30 align-items-center">
                    <div class="col-md-6">
                        <form class="form form-url" method="post" action="<?php echo base_url('set'); ?>">
                            <h2>Take control of your desired products.</h2>
                            <p class="animated fadeInUp">
                                <span class="h6">Product Monitor is an independent web application with rich features. Start collecting your favourite products.</span>
                            </p>
                            <div class="form-inline-group offset-xs">
                                <input class="form-control form-control-intro" type="text" name="url" placeholder="Enter your favourite product URL" value="<?php echo $url; ?>" autofocus>
                            </div>
                            <?php if ($error) { ?>
                            <small class="text-danger">*<?php echo $error; ?></small>
                            <?php } ?>
                            <div class="offset-xs">
                                <button class="btn btn-lg btn-dark btn-round btn-anis" type="submit" id="submit">Submit to collection</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6 d-none d-md-block"><img src="<?php echo base_url('assets/img/image-55-613x599.png'); ?>" alt="" width="613" height="599"/>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg bg-transparent text-center novi-background">
            <div class="container">
                <h2>The proof is in the numbers!</h2>
                <div class="row row-30 justify-content-center justify-content-xl-between">
                    <div class="col-xs-6 col-md-4">
                        <div class="counter">
                            <div class="counter-body">
                                <div class="counter-value h1">
                                    <span class="counter-prefix">+</span>
                                    <span data-counter="">
                                        <?php
                                            $hour1    = $hour2 = 0;
                                            $date1    = new DateTime("2020-05-30 00:00:00");
                                            $date2    = new DateTime(date('Y-m-d H:i:s'));
                                            $interval = $date1->diff($date2);
                                            if ($interval->format('%a') > 0) {
                                                $hour1 = $interval->format('%a')*24;
                                            }
                                            if ($interval->format('%h') > 0) {
                                                $hour2 = $interval->format('%h');
                                            }
                                            echo $hour1 + $hour2;
                                        ?>
                                    </span>
                                    <svg class="text-primary" width=".62em" height=".62em" viewBox="0 0 41 41">
                                        <path d="M11.5222 40.67L0.566195 29.714L21.0922 9.188L15.3502 3.446L40.4302 0.805998L37.7902 25.886L32.0482 20.144L11.5222 40.67Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div class="counter-title">Server uptime</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-md-4">
                        <div class="counter">
                            <div class="counter-body">
                                <div class="counter-value h1">
                                    <span class="counter-prefix">+</span>
                                    <span data-counter=""><?php echo count($this->data->listProduct()); ?></span>
                                    <svg class="text-primary" width=".62em" height=".62em" viewBox="0 0 41 41">
                                        <path d="M11.5222 40.67L0.566195 29.714L21.0922 9.188L15.3502 3.446L40.4302 0.805998L37.7902 25.886L32.0482 20.144L11.5222 40.67Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div class="counter-title">Total products</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 col-md-4">
                        <div class="counter">
                            <div class="counter-body">
                                <div class="counter-value h1">
                                    <span class="counter-prefix">+</span>
                                    <span data-counter=""><?php echo count($this->data->listUpdated()); ?></span>
                                    <svg class="text-primary" width=".62em" height=".62em" viewBox="0 0 41 41">
                                        <path d="M11.5222 40.67L0.566195 29.714L21.0922 9.188L15.3502 3.446L40.4302 0.805998L37.7902 25.886L32.0482 20.144L11.5222 40.67Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div class="counter-title">Updated prices</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg bg-200 novi-background">
            <div class="container">
                <div class="row row-30 justify-content-xl-between novi-disabled">
                    <div class="col-md-10 col-lg-5">
                        <h2>We've using multiple platforms</h2>
                        <p>Our team has worked with some of the most powerful tools to help them succeed.</p>
                    </div>
                    <div class="col-md-10 col-lg-7 col-xl-6">
                        <div class="row row-30 row-lg-40">
                            <div class="col-6">
                                <div class="partner"><img class="partner-image" src="<?php echo base_url('assets/img/technology/technology-1-290x120.png'); ?>" alt="" width="290" height="120"/></div>
                            </div>
                            <div class="col-6">
                                <div class="partner"><img class="partner-image" src="<?php echo base_url('assets/img/technology/technology-2-290x120.png'); ?>" alt="" width="290" height="120"/></div>
                            </div>
                            <div class="col-6">
                                <div class="partner"><img class="partner-image" src="<?php echo base_url('assets/img/technology/technology-3-290x120.png'); ?>" alt="" width="290" height="120"/></div>
                            </div>
                            <div class="col-6">
                                <div class="partner"><img class="partner-image" src="<?php echo base_url('assets/img/technology/technology-4-290x120.png'); ?>" alt="" width="290" height="120"/></div>
                            </div>
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