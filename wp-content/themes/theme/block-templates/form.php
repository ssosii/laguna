<section id="form">

    <div class="form form__container">

        <div class="form__box">
            <p class="form__title">
                Contact with us!
            </p>
            <div class="form__contactForm">

                <?= do_shortcode(' [contact-form-7 id="22" title="Contact form 1"]');?>
            </div>

        </div>
        <div class="form__box">
            <img class="form__image" src="<?php the_field("zdjecie")?>" />

        </div>
    </div>

</section>