<?php
get_header();
?>
<main id="single">
    <div class="single__inner">
        <div class="single__container">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <?php endwhile; else: ?>
            <p><?php _e('Nie znaleziono postów spełniających podane kryteria.'); ?></p>
            <?php endif; ?>
        </div>
    </div>
</main>

<?php
get_footer();