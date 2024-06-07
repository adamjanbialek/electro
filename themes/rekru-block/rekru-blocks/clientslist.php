<section class="cards-container cards-container--in-touch cards-container--our-clients">
    <?php echo $content; ?>
    <div class="cards-slider swiper--our-clients">
        <div class="button--swiper">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="cards swiper-wrapper">
            <?php

            $homepageServices = new WP_Query(array(
                'post_type' => 'clients',
                'orderby' => 'date',
                'order' => 'ASC',
            ));

            while($homepageServices -> have_posts()) {
                $homepageServices -> the_post();
                ?>
                <div class="card card--box-shadow swiper-slide">
                    <?php $image = get_field('service_image'); // Retrieve the image field value
                    if ($image) {
                        $image_url = $image['url'];
                        ?>
                        <picture>
                            <img src="<?= $image_url; ?>">
                        </picture>
                    <?php } ?>
                    <h4 class="paragraph paragraph--extra-large"><?php the_title() ?></h4>
                    <p class="paragraph paragraph--medium"><?php echo get_the_content(); ?></p>
                </div>
            <?php }
            ?>
        </div>
    </div>
</section>
