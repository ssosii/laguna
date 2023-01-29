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


<div class="single-box single-box__container">

    <div class="single-box__element">

        <div class="single-box__title">
            <p class="single-box__title single-box__title--small"><?php echo $smallTitle ?> </p>
            <h1 class="single-box__title single-box__title--big"><?php echo $bigTitle ?></h1>
        </div>
        <p class="single-box__text">
            <?php echo $glowny_tekst ?>
        </p>
    </div>
    <div class="single-box__element">

        <img class="single-box__image" src="<?php echo $zdjecie?>" />

    </div>

</div>