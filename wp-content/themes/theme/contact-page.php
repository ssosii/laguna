<?php
/* Template Name: Contact Page */
?>

<?php get_header(); ?>

<main id="home">
    <div class=”spacer”></div>

    <?php get_template_part('pages/Contact/content', 'map')?>
    <?php get_template_part('pages/Contact/content', 'form')?>

</main>



<?php
get_footer();