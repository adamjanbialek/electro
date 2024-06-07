<section class="list-elements list-elements--our-wave">
    <?= $content; ?>
    <div class="elements-container">
        <?php

        $homepageServices = new WP_Query(array(
            'post_type' => 'processes',
            'orderby' => 'date',
            'order' => 'ASC',
        ));

        while($homepageServices -> have_posts()) {
            $homepageServices -> the_post();
            ?>
            <div class="list-element">
                <div class="text-container">
                    <?php $image = get_field('service_image'); // Retrieve the image field value
                    if ($image) {
                        $image_url = $image['url'];
                        ?>
                        <picture class="number" data-aos="fade-down">
                            <img src="<?= $image_url; ?>">
                        </picture>
                    <?php } ?>
                    <h4 class="card-heading"><?php the_title() ?></h4>
                    <p class="paragraph paragraph--small"><?php echo get_the_content(); ?></p>
                </div>
            </div>
        <?php }
        ?>
    </div>
</section>