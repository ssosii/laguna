<?php
/* Template Name: City Page */
?>

<?php get_header(); ?>

<main id="home">
    <br> <br> <br> <br> <br> <br>
    <?php get_template_part('pages/Home/content', 'single-box')?>

    <?php get_template_part('pages/Province/content', 'bigCity')?>
    <?php get_template_part('pages/Province/content', 'smallCity')?>
</main>



<?php
get_footer();