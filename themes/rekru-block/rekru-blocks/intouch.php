 <section class="cards-container cards-container--in-touch">
     <?php echo $content; ?>
     <div class="cards">
         <?php

         $homepageServices = new WP_Query(array(
             'post_type' => 'intouchcontacts',
             'orderby' => 'date',
             'order' => 'ASC',
         ));

         while($homepageServices -> have_posts()) {
             $homepageServices -> the_post();
             ?>
             <div class="card card--box-shadow">
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
     </div>
 </section>