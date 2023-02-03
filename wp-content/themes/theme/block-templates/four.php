<section id="four-box">
    <h2 class="main--title --center fadeInTrigger"><?php the_field('nazwa')?></h2>

    <div class="four-box--list container">

        <?php if( get_field('block') ): ?>
        <?php while( the_repeater_field('block') ): ?>


        <div class="item fadeInTrigger">
            <div class="image">
                <img src="<?php the_sub_field('Ikona'); ?>" />
            </div>
            <h3 class="title"><?php the_sub_field('tytul'); ?></h3>
            <p class="description"><?php the_sub_field('opis'); ?></p>
        </div>
        <?php endwhile; ?>
        <?php endif;?>
    </div>


</section>