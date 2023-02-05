<footer id="footer">

    <div class="footer footer__container">
        <div class="footer__menu">


            <?php if( get_field('nawigacja', 'option') ): ?>
            <?php while( the_repeater_field('nawigacja', 'option') ): ?>


            <?php if( the_repeater_field('nawigacja_kolumna') ): ?>

            <div class="footer__element">
                <p class="footer__title">Nazwa kolumny</p>

                <ul class="footer__list">
                    <?php while( the_repeater_field('nawigacja_kolumna') ): ?>

                    <li class="footer__item"><a
                            href="<?php the_sub_field("element_link")?>"><?php the_sub_field("Element_nazwa")?></a></li>

                    <?php endwhile; ?>
                </ul>
            </div>


            <?php endif;?>



            <?php endwhile; ?>
            <?php endif;?>



        </div>
        <div class="footer__data">
            <div class="footer__logo">
                <img src="<?php the_field("footer_logo", 'option')?>" />
            </div>
            <div class="footer__slogan">
                <?php the_field("footer_slogan", 'option')?>


            </div>

            <div class="footer__adress">

                <!-- <div class="footer__element"><img class="footer__image"
                        src="<?php echo get_template_directory_uri(); ?>/assets/img/address.svg" />
                    <span>123 Anywhere St., Any City, ST 12345</span>
                </div>
                <div class="footer__element"><img class="footer__image"
                        src="<?php echo get_template_directory_uri(); ?>/assets/img/phone.svg" />
                    <span>+48 577777777</span>
                </div> -->




                <?php the_field("adress", 'option')?>

            </div>
            <!-- <div class="footer__social">
                <img class="footer__image" src="<?php echo get_template_directory_uri(); ?>/assets/img/insta.svg" />
                <img class="footer__image" src="<?php echo get_template_directory_uri(); ?>/assets/img/fb.svg" />


            </div> -->
        </div>
    </div>

    <div class="copyright">
        <span>Laguna Empire &copy;</span> <span class="acutal-date"></span>
    </div>

</footer>
<?php wp_footer(); ?>

</body>

</html>