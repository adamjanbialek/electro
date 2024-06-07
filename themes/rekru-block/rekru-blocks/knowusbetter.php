<section class="hero hero--know-us-better">
    <div class="subsections-container">
        <div class="subsection-container subsection-container--text">
            <h2 class="section-title section-title--medium"><?php echo $attributes['heading']; ?></h2>
            <div class="form-section">
                <div class="form-container">
                    <div class="form-subcontainer">
                        <input type="text" placeholder="Enter your Name" class="form-input" required>
                        <input type="email" placeholder="Enter Your Mail" class="form-input" required>
                        <input type="text" placeholder="Enter Your Topic" class="form-input" required>
                        <input type="text" placeholder="Enter Your Massage" class="form-input" required>
                        <button class="button button--hero">Send Massage</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="subsection-container">
            <p class="paragraph paragraph--small">
                <?php echo $attributes['textContent']; ?>
            </p>
            <div class="subsection-container image-with-background image-with-background--know-us-better">
                <picture class="gradient-box" data-aos="fade-up-left" data-aos-delay="400" >
                    <img src="<?= get_theme_file_uri() ?>/assets/know-us-better/gradient.jpg">
                </picture>
                <picture class="main-image" data-aos="zoom-in">
                    <img src="<?php echo $attributes['imgURL']; ?>">
                </picture>
                <picture class="optional-image" data-aos="fade-down-right" data-aos-delay="400">
                    <img src="<?= get_theme_file_uri() ?>/assets/know-us-better/dots.png">
                </picture>
            </div>
        </div>
    </div>
</section>
