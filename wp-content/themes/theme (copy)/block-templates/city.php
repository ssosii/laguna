<?php 
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'testimonial-block';
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $class_name .= ' align' . $block['align'];
}

$smallTitle = get_field('tytul');
$bigTitle = get_field('glowny_tytul');
$text = get_field('tekst');
$zdjecie = get_field('zdjecie')
?>



<section id="city">
    <div class="city-box city-box__container">


        <div class="city-box__element">
            <div class="city-box__title">
                <p class="city-box__title city-box__title--small"><?php echo $smallTitle ?></p>
                <h1 class="city-box__title city-box__title--big"><?php echo $bigTitle ?></h1>
            </div>
            <img class="city-box__image" src="<?php echo $zdjecie ?>" />

        </div>

        <div class="city-box__element">


            <p class="city-box__text">
                <?php echo $text ?>
            </p>

            <div class="city-box__cities">
                <!-- <div class="city-box__city">Warszawa</div>
                <div class="city-box__city">Kraków</div>
                <div class="city-box__city">Częstochowa</div>
                <div class="city-box__city">Opole</div> -->

                <?php if( get_field('miasta') ): ?>
                <?php while( the_repeater_field('miasta') ): ?>

                <a href="<?php the_sub_field('link'); ?>">
                    <div class="city-box__city"><?php the_sub_field('miasto'); ?></div>
                </a>


                <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>

    </div>
</section>