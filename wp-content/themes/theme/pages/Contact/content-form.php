<section id="form">

    <div class="form form__container">

        <div class="form__box fadeInTrigger">
            <div class="form__title">
                Napisz do nas!:)
            </div>
            <div class="form__contactForm">

                <?= do_shortcode(' [contact-form-7 id="22" title="Contact form 1"]');?>
            </div>

        </div>
        <div class="form__box fadeInTrigger">
            <img class="form__image" src="<?php the_field("zdjecie")?>" />

        </div>
    </div>

</section>