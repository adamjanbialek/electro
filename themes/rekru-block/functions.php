<?php

    function rekru_styles() {
        wp_enqueue_script('swiper_js', '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', NULL, '11', true);
        wp_enqueue_style('AOS_animate', '//unpkg.com/aos@2.3.1/dist/aos.css', false, null);
        wp_enqueue_script('AOS', '//unpkg.com/aos@2.3.1/dist/aos.js', false, null, true);
        wp_enqueue_script('theme-js', get_theme_file_uri('/scripts/vendor/theme.js'), array( 'AOS' ), null, true);
        wp_enqueue_style('rekru_main_styles', get_theme_file_uri('/assets/dist/index.css'));
        wp_enqueue_style('swiper_styles', '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
    }

    add_action('wp_enqueue_scripts', 'rekru_styles');

    function rekru_features() {
        add_theme_support('title-tag');
        add_image_size('hero', 554, 650);
        add_theme_support('editor-styles');
        add_editor_style(array('assets/dist/index.css'));
    }

    add_action('after_setup_theme', 'rekru_features');

function allow_svg_upload( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'allow_svg_upload' );

class ItemList {
    function __construct($name) {
        $this -> name = $name;
        add_action('init', [$this, 'onInit']);
    }

    function ourRenderCallback($attributes, $content) {
        ob_start();
        require get_theme_file_path("/rekru-blocks/{$this -> name}.php");
        return ob_get_clean();
    }

    function onInit() {
        wp_register_script($this -> name, get_stylesheet_directory_uri() . "/rekru-blocks/{$this->name}.js", array('wp-blocks', 'wp-editor'));

        register_block_type("rekrublocktheme/{$this->name}", array(
            'editor_script' => $this->name,
            'render_callback' => [$this, 'ourRenderCallback']
        ));
    }
}

new ItemList("services");
new ItemList("servicesbottom");

class JSXBlock{
    function __construct($name, $renderCallback = null) {
        $this -> name = $name;
        $this -> renderCallback = $renderCallback;
        add_action('init', [$this, 'onInit']);
    }

    function ourRenderCallback($attributes, $content) {
        ob_start();
        require get_theme_file_path("/rekru-blocks/{$this -> name}.php");
        return ob_get_clean();
    }

    function onInit() {
        wp_register_script($this -> name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));

        $ourArgs = array(
            'editor_script' => $this->name
        );

        if($this->renderCallback) {
            $ourArgs['render_callback'] = [$this, 'ourRenderCallback'];
        }

        register_block_type("rekrublocktheme/{$this->name}", $ourArgs);
    }
}

new JSXBlock('hero');
new JSXBlock('ridewave');
new JSXBlock('ourtechnology');
new JSXBlock('knowusbetter', true);
new JSXBlock('clientslist', true);

new JSXBlock('herooutsourcing');
new JSXBlock('whyoutsource');
new JSXBlock('benefits', true);
new JSXBlock('ourexpertise', true);
new JSXBlock('ourclients');
new JSXBlock('contact');

new JSXBlock('herocontact');
new JSXBlock('intouch', true);
new JSXBlock('contactmap');