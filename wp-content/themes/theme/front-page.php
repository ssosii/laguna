<?php
/* Template Name: Home */
?>

<?php get_header(); ?>
<main id="home">
    <br/> <br/> <br/>  <br/> <br/> <br/>
    <?php get_template_part('pages/Home/content', 'single-box')?>
    <?php get_template_part('pages/Home/content', 'map')?>
    <?php get_template_part('pages/Home/content', 'single-box')?>
    <?php get_template_part('pages/Home/content', 'map')?>
    <?php get_template_part('pages/Home/content', 'single-box')?>
    <?php get_template_part('pages/Home/content', 'map')?>
    <?php get_template_part('pages/Home/content', 'single-box')?>
    <?php get_template_part('pages/Home/content', 'map')?>

</main>
<?php
get_footer();