<?php
/* Template Name: Home */
?>

<?php get_header(); ?>
<main id="home">
    <?php get_template_part('pages/Home/content', 'single-box')?>
    <?php get_template_part('pages/Home/content', 'map')?>


</main>
<?php
get_footer();