<section class="services">
    <picture class="line-bg">
        <img src="<?= get_theme_file_uri() ?>/assets/services/services-bg.svg">
    </picture>
    <ul>
        <?php

        $homepageServices = new WP_Query(array(
            'post_type' => 'servicesbottom',
            'orderby' => 'date',
            'order' => 'ASC',
        ));

        while($homepageServices -> have_posts()) {
            $homepageServices -> the_post();
            ?>
            <li  data-aos="fade-down" class="colorful-title">
                <picture >
                    <img src="<?= get_theme_file_uri() ?>/assets/services/star.svg">
                </picture>
                <p class="card-heading"><?php the_title() ?></p>
            </li>
        <?php }
        ?>
    </ul>
</section>
