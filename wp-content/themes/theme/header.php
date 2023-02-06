<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>



    <!-- Google -->
    <meta name="description" content="<?php bloginfo('description'); ?>" />

    <!-- Facebook -->
    <meta property="og:title" content="<?php the_title(); ?>">
    <meta property="og:site_name" content="<?php the_title(); ?>">
    <meta property="og:url" content="<?php echo get_home_url(); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?php echo get_home_url(); ?>">
    <meta property="twitter:title" content="<?php the_title(); ?>">
    <meta property="twitter:description" content="<?php bloginfo('description'); ?>">
    <meta property="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg">

    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="<?php echo get_bloginfo('description'); ?>">

    <!-- styles and scripts in functions.php -->


    <!-- Google Tag Manager -->
    <script>
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-P2QRJ9W');
    </script>
    <!-- End Google Tag Manager -->


    <?php wp_head(); ?>
</head>

<body class="<?php if (is_front_page()) : ?>home<?php else : ?>page_<?= get_the_ID(); ?><?php endif; ?>">

    <header class="header--component">
        <div class="container-fluid">


            <div class="left">
                <a href="<?= get_home_URL(); ?>" class="logo">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg" class="image"/>
                    <!-- znależć css -->

                </a>
            </div>

            <nav class="navigation--component">
                <!-- <div class="close">
            <div class="burger open navigationClose">
                <div class="burger__item"></div>
            </div>
        </div> -->

                <?php
                wp_nav_menu(array(
                    'theme_location' => 'main',
                    'container' => 'ul',
                    'menu_class' => 'links'
                ));
                ?>
            </nav>

            <div class="action">
                <div class="estimate">
                    <!-- @todo - niepoprawne nagłówki (h3,h2?) -->
                    <a href="tel:0048500405405">+48 500 405 405</a>
                </div>

                <div class=" burger navigationOpen">
                    <div class="burger__item"></div>
                </div>


            </div>

        </div>

    </header>

    <!-- <header class="header">
        <div class="header__inner">
            <div class="header__container">
                <div class="header__container_inner container">
                <div class="header__left">
                    <a href="<?php echo get_home_url(); ?>" class="header__logo">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.png" alt="logo">
                    </a>
                    <nav id="main__nav" class="header__nav">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'main',
                            'container' => 'ul',
                            'menu_class' => 'header__items'
                        ));
                        ?>
                    </nav>
                </div>
                <div class="estimate">
                <a href="tel:0048500405405">+48 500 405 405</a>
                </div>
          
                </div>
                <div class="header__burger">
                    <div class="header__burger-item"></div>
                </div>
            </div>
            </div>
        </div>
        <div class="arrow__up"></div>
    </header> -->