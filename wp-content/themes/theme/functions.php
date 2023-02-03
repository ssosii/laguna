<?php

/*****************************************************************************************************/

/* INCLUDE SCRIP & ASSETS */
get_template_part('functions/include-script-styles');

/*****************************************************************************************************/

/* MENU REGISTER */
get_template_part('functions/menu-register');

/*****************************************************************************************************/

/* STYLE ACF WP */
get_template_part('functions/style-acf-wp');

/*****************************************************************************************************/

/* CUSTOM POST TYPE & TAXONOMIES */
//get_template_part('functions/custom-post-type');  

/*****************************************************************************************************/

/* OPTION PAGES */
get_template_part('functions/acf-options-page'); 

/*****************************************************************************************************/

/* INCLUDE ACF BLOCKS */
//get_template_part('functions/acf-blocks');

/*****************************************************************************************************/

/* DISABLE COMMENTS */
get_template_part('functions/disable-comments');

/*****************************************************************************************************/

add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );

//allow svg
function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml'; 
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types'); 

//wordpress 5.9.2 breaking acf media fix
function acf_filter_rest_api_preload_paths( $preload_paths ) {
	global $post;
	$rest_path    = rest_get_route_for_post( $post );
	$remove_paths = array(
		add_query_arg( 'context', 'edit', $rest_path ),
		sprintf( '%s/autosaves?context=edit', $rest_path ),
	);

	return array_filter(
		$preload_paths,
		function( $url ) use ( $remove_paths ) {
			return ! in_array( $url, $remove_paths, true );
		}
	);
}
add_filter( 'block_editor_rest_api_preload_paths', 'acf_filter_rest_api_preload_paths', 10, 1 );

//admin avatar change
function admin_avatar($args, $id_or_email) {
    if($id_or_email == 1) {
        $args['url'] = get_template_directory_uri() . '/assets/img/admin/icon.jpg';
    }
    return $args;
} 
add_filter('get_avatar_data', 'admin_avatar', 100, 2);

/* hide default posts */
// function remove_posts_menu() {
//     remove_menu_page('edit.php');
// }
// add_action('admin_menu', 'remove_posts_menu');
/* hide default posts end*/


add_action('acf/init', 'my_acf_op_init');
function my_acf_op_init() {

    // Check function exists.
    if( function_exists('acf_add_options_page') ) {

        // Register options page.
        $option_page = acf_add_options_page(array(
            'page_title'    => __('Ustawienia stopki'),
            'menu_title'    => __('Stopka'),
            'menu_slug'     => 'theme-general-settings',
            'capability'    => 'edit_posts',
            'redirect'      => false
        ));
    }
}


add_action( 'acf/init', 'hfm_acf_init_blocks' );
function hfm_acf_init_blocks() {

    if ( function_exists( 'acf_register_block_type' ) ) {
        acf_register_block_type(
            array(
                'name'            => 'kuya-main',
                'title'           => 'Kuya-Main',
                'description'     => 'Główny blok',
                'render_template' => 'block-templates/single-box.php',
                'category'        => 'layout',
                'icon'            => 'admin-comments',
                'api_version'     => 2,
                'keywords'        => array( 'opening hours', 'hours' ),
                'mode'            => 'edit',
                'align'           => 'full',
             
            )
        );

        acf_register_block_type(
            array(
                'name'            => 'kuya-proces',
                'title'           => 'Kuya-Proces',
                'description'     => 'Proces blok',
                'render_template' => 'block-templates/process.php',
                'category'        => 'layout',
                'icon'            => 'admin-comments',
                'api_version'     => 2,
                'keywords'        => array( 'opening hours', 'hours' ),
                'mode'            => 'edit',
                'align'           => 'full',
             
            )
        );

        acf_register_block_type(
            array(
                'name'            => 'kuya-city',
                'title'           => 'Kuya-City',
                'description'     => 'Duże miasta',
                'render_template' => 'block-templates/city.php',
                'category'        => 'layout',
                'icon'            => 'admin-comments',
                'api_version'     => 2,
                'keywords'        => array( 'opening hours', 'hours' ),
                'mode'            => 'edit',
                'align'           => 'full',
             
            )
        );


        
        acf_register_block_type(
            array(
                'name'            => 'kuya-Mapa',
                'title'           => 'Kuya-Mapa',
                'description'     => 'Mapa',
                'render_template' => 'block-templates/map.php',
                'category'        => 'layout',
                'icon'            => 'admin-comments',
                'api_version'     => 2,
                'keywords'        => array( 'opening hours', 'hours' ),
                'mode'            => 'edit',
                'align'           => 'full',
             
            )
        );

        acf_register_block_type(
            array(
                'name'            => 'kuya-four',
                'title'           => 'Kuya-Four',
                'description'     => 'Cztery elementy',
                'render_template' => 'block-templates/four.php',
                'category'        => 'layout',
                'icon'            => 'admin-comments',
                'api_version'     => 2,
                'keywords'        => array( 'opening hours', 'hours' ),
                'mode'            => 'edit',
                'align'           => 'full',
             
            )
        );


        acf_register_block_type(
            array(
                'name'            => 'kuya-form',
                'title'           => 'Kuya-Form',
                'description'     => 'Form',
                'render_template' => 'block-templates/form.php',
                'category'        => 'layout',
                'icon'            => 'admin-comments',
                'api_version'     => 2,
                'keywords'        => array( 'opening hours', 'hours' ),
                'mode'            => 'edit',
                'align'           => 'full',
             
            )
        );

        
    }
}



?>