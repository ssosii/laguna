<?php
/* Template Name: Province Page */
?>

<?php get_header(); ?>

<main id="home">
    <br> <br> <br>

    <?php
if ( function_exists('yoast_breadcrumb') ) {
yoast_breadcrumb( '<p class="breadcrumbs container">','</p>' );
}
?>
    <?php the_content()?>
</main>



<?php
get_footer();