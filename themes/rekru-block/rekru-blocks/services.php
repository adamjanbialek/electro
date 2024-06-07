<section class="cards-container cards-container--ride-wave">
    <?php

    $homepageServices = new WP_Query(array(
        'post_type' => 'services',
        'orderby' => 'date',
        'order' => 'ASC',
    ));

    while($homepageServices -> have_posts()) {
        $homepageServices -> the_post();
        ?>
        <div class="card" data-aos="fade-up" data-aos-duration="1500">
            <?php $image = get_field('service_image'); // Retrieve the image field value
            if ($image) {
                $image_url = $image['url'];
                ?>
                <picture>
                    <img src="<?= $image_url; ?>">
                </picture>
            <?php } ?>
            <h4 class="card-heading"><?php the_title() ?></h4>
            <p class="paragraph paragraph--small"><?php echo get_the_content(); ?></p>
        </div>
    <?php }
    ?>
</section>