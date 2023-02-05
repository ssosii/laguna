<?php
/* Template Name: City Page */
?>

<?php get_header(); ?>



<main id="home">


    <?php
if ( function_exists('yoast_breadcrumb') ) {
  yoast_breadcrumb( '<p class="breadcrumbs container">','</p>' );
}
?>

    <?php the_content()?>
</main>



<?php
get_footer();