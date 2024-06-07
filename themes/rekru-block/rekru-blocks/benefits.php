<section class="list-elements list-elements--outsourcing outsourcing-background">
    <?= $content; ?>
    <div class="elements-container">
        <?php

        $homepageServices = new WP_Query(array(
            'post_type' => 'benefits',
            'orderby' => 'date',
            'order' => 'ASC',
        ));

        $i = 0;
        while($homepageServices -> have_posts()) {
            $homepageServices -> the_post();
            $i++;
            ?>
            <div class="list-element">
                <?php if($i % 2 !== 0) { ?>
                    <div class="images-container" data-aos="fade-right">
                        <?php $image = get_field('service_image'); // Retrieve the image field value
                        if ($image) {
                            $image_url = $image['url'];
                            ?>
                            <picture>
                                <img src="<?= $image_url; ?>">
                            </picture>
                        <?php } ?>
                    </div>
                    <div class="text-container" data-aos="fade-left">
                        <h4 class="card-heading"><?php the_title() ?></h4>
                        <p class="paragraph paragraph--small"><?php echo get_the_content(); ?></p>
                    </div>
                <?php } else { ?>
                    <div class="text-container" data-aos="fade-right">
                        <h4 class="card-heading"><?php the_title() ?></h4>
                        <p class="paragraph paragraph--small"><?php echo get_the_content(); ?></p>
                    </div>
                    <div class="images-container" data-aos="fade-left">
                        <?php $image = get_field('service_image'); // Retrieve the image field value
                        if ($image) {
                            $image_url = $image['url'];
                            ?>
                            <picture>
                                <img src="<?= $image_url; ?>">
                            </picture>
                        <?php } ?>
                    </div>
                <?php } ?>
            </div>
        <?php }
        ?>
    </div>
</section>