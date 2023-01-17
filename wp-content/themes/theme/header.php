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

    <header class="header">
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
          
                </div>
                <div class="header__burger">
                    <div class="header__burger-item"></div>
                </div>
            </div>
            </div>
        </div>
        <div class="arrow__up"></div>
    </header>