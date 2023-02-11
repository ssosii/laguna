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

    <link
      href="https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.css"
      rel="stylesheet"
    />

    <?php wp_head(); ?>
</head>

<body class="<?php if (is_front_page()) : ?>home<?php else : ?>page_<?= get_the_ID(); ?><?php endif; ?>">

    <header class="header--component">
        <div class="container-fluid">


            <div class="left">
                <a href="<?= get_home_URL(); ?>" class="logo">
                    <img  loading="lazy"  alt="" src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg" class="image"/>
                    <!-- znależć css -->

                </a>
            </div>

            <nav class="navigation--component">
                <!-- <div class="close">
            <div class="burger open navigationClose">
                <div class="burger__item"></div>
            </div>
        </div> -->

        <div class="wrap-links">
        <?php
                wp_nav_menu(array(
                    'theme_location' => 'main',
                    'container' => 'ul',
                    'menu_class' => 'links'
                ));
                ?>

                       <div class="estimate">
            <a href="<?php echo get_permalink(20); ?>">GET A QUOTE</a>
            </div>

        </div>
       
            </nav>

            <div class="action">
                <div class="estimate">
    
                    <a href="<?php echo get_permalink(20); ?>">GET A QUOTE</a>
                </div>

                <div class=" burger navigationOpen">
                    <div class="burger__item"></div>
                </div>


            </div>

        </div>

    </header>
