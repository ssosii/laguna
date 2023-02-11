<footer id="footer">

    <div class="footer footer__container">
        <div class="footer__menu">


            <?php if( get_field('nawigacja', 'option') ): ?>
            <?php while( the_repeater_field('nawigacja', 'option') ): ?>



            <ul class="footer__list">
                <?php while( the_repeater_field('nawigacja_kolumna') ): ?>

                <li class="footer__item"><a
                        href="<?php the_sub_field("element_link")?>"><?php the_sub_field("Element_nazwa")?></a></li>

                <?php endwhile; ?>
            </ul>



            <?php endwhile; ?>
            <?php endif;?>



        </div>
        <div class="footer__data">
            <div class="footer__logo">
                <img loading="lazy" alt=""  src="<?php the_field("footer_logo", 'option')?>" alt="" srcset="">

            </div>
            <div class="footer__slogan">
                <!-- @todo - przeniesc do acf -->
                <?php the_field("footer_slogan", 'option')?>


            </div>

            <div class="footer__adress">
                <?php the_field("address", 'option')?>



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
<!-- <script src="https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.js"></script> -->

    <!-- Google Tag Manager -->
    <script>
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-P2QRJ9W');
    </script>
    <!-- End Google Tag Manager -->
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.js"></script>
<?php wp_footer(); ?>

</body>

</html>