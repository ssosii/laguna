<?php
//disable default posts
// function remove_posts_menu()
// {
//     remove_menu_page('edit.php');
// }
// add_action('admin_menu', 'remove_posts_menu');


// //register custom post types
// function dotlinecode_custom_post_type()
// {
//     // Add admin page to the menu
//     function add_admin_page()
//     {
//         add_menu_page(
//             'Menu_page', //Page Title
//             'Menu_page', //Menu Title
//             'manage_options', //Capability
//             'CPT_SLUG_HERE_cpt', //Page slug
//             'admin_page_html', //Callback to print html
//             'dashicons-welcome-write-blog', // icon_url
//             5   // position
//         );
//     }
//     add_action('admin_menu', 'add_admin_page');


//     //CPT_SLUG_HERE z terenów
//     $CPT_SLUG_HERE = array(
//         'name'                => _x('CPT_NAME', 'Post Type General Name'),
//         'singular_name'       => _x('CPT_NAME', 'Post Type Singular Name'),
//         'menu_name'           => __('CPT_NAME '),
//         'all_items'           => __('CPT_NAME '),
//         'view_item'           => __('Zobacz'),
//         'add_new_item'        => __('Dodaj'),
//         'add_new'             => __('Dodaj nowy'),
//         'edit_item'           => __('Edytuj'),
//         'search_items'        => __('Szukaj'),
//     );
//     $CPT_SLUG_HERE_args = array(
//         'label'               => __('CPT_SLUG_HERE'),
//         'labels'              => $CPT_SLUG_HERE,
//         'supports'            => array('title', 'editor', 'thumbnail', 'custom-fields', 'page-attributes','excerpt','author'),
//         'hierarchical'        => true,
//         'public'              => true,
//         'show_ui'             => true,
//         'show_in_menu'        => true,
//         'show_in_nav_menus'   => true,
//         'show_in_admin_bar'   => true,
//         'menu_icon'           => 'dashicons-welcome-write-blog',
//         'menu_position'       => 1,
//         'can_export'          => true,
//         'has_archive'         => false,
//         'exclude_from_search' => false,
//         'publicly_queryable'  => true,
//         'capability_type'     => 'post',
//         'show_in_rest' => true,
//     );
//     register_post_type('CPT_SLUG_HERE', $CPT_SLUG_HERE_args);

// }
// add_action('init', 'dotlinecode_custom_post_type', 0);



// //register taxonomies
// function dotlinecode_register_taxonomy()
// {
//     $taxonomy = array(
//         'name' => _x('TAXONOMY_NAME', 'taxonomy general name'),
//         'singular_name' => _x('TAXONOMY_NAME', 'taxonomy singular name'),
//         'menu_name' => __('TAXONOMY_NAME'),
//     );
//     register_taxonomy('taxonomy', array('CPT_SLUG_HERE'), array(
//         'hierarchical' => true,
//         'labels' => $taxonomy,
//         'show_ui' => true,
//         'show_admin_column' => true,
//         'query_var' => true,
//         'show_in_rest' => true,
//     ));

// }
// add_action('init', 'dotlinecode_register_taxonomy');



// //show edit taxonomies buttons
// function dotlinecode_custom_admin_archive_link()
// {
   
//     function dotlinecode_custom_admin_archive_link_subjects()
//     {
//         echo '<div class="wrap" style="margin-top: 15px"><a href="' . get_site_url() . '/wp-admin/edit-tags.php?taxonomy=TAXONOMY_SLUG_HERE&post_type=CPT_SLUG_HERE" class="page-title-action">Button text</a></div>';
//     }
//     add_filter('views_edit-pytania_cpt', 'dotlinecode_custom_admin_archive_link_subjects');
// }
// add_action('init', 'dotlinecode_custom_admin_archive_link');