<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    
     <!-- Google -->
     <meta name="description" content="<?php bloginfo('description'); ?>" />

    <!-- Facebook -->
    <meta property="og:title" content="<?php the_title();?>">
    <meta property="og:site_name" content="<?php the_title();?>">
    <meta property="og:url" content="<?php echo get_home_url(); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?php echo get_home_url(); ?>">
    <meta property="twitter:title" content="<?php the_title();?>">
    <meta property="twitter:description" content="<?php bloginfo('description'); ?>">
    <meta property="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg">

    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="<?php echo get_bloginfo('description'); ?>">
    
    <!-- styles and scripts in functions.php -->
  

    <?php wp_head(); ?>
</head>
<body class="<?php if (is_front_page()) : ?>home<?php else:?>page_<?= get_the_ID();?><?php endif; ?>">

<header id="header">
    <div class="transition transition-1 is-active"></div>
    <div class="header__inner">
        <div class="header__container">
            <nav class="header__nav">
                <?php
                    wp_nav_menu(array(
                    'theme_location' => 'main',
                    'container' => 'ul',
                    'menu_class' => 'header__list'
                    ));
                ?>
            </nav>
            <div class="burger">
                <div class="burger__item"></div>
            </div>
        </div>
    </div>
</header>