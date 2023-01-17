<?php
function add_theme_assets()
{
    wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0.0', 'all');

    // wp_deregister_script('jquery');
    // wp_enqueue_script('jquery',  get_template_directory_uri() . '/assets/vendor/jquery/jquery.min.js', array(), '3.6.0', true);
	wp_enqueue_script('main', get_stylesheet_directory_uri() . '/assets/js/main.js', array(), getLastEditTime(get_template_directory_uri() . '/assets/js/main.js'), true);
}
add_action('wp_enqueue_scripts', 'add_theme_assets');

function getLastEditTime($filePath, $url = true) {
    if (!$url) $filePath = str_replace(array(home_url(), '//'), array(ABSPATH, '/'), $filePath);
    return filemtime($filePath);
}
