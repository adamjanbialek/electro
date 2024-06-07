<?php

function rekru_post_types() {
    register_post_type('services', array(
        'public' => true,
        'labels' => array(
            'name' => 'Services List',
            'add_new_item' => 'Add New Services',
            'edit_item' => 'Edit Service',
            'all_items' => 'All Services',
            'singular_name' => 'Service',
        ),
        'menu_icon' => 'dashicons-list-view'
    ));

    register_post_type('clients', array(
        'public' => true,
        'labels' => array(
            'name' => 'Clients List',
            'add_new_item' => 'Add New Clients',
            'edit_item' => 'Edit Client',
            'all_items' => 'All Clients',
            'singular_name' => 'Client',
        ),
        'menu_icon' => 'dashicons-list-view'
    ));

    register_post_type('benefits', array(
        'public' => true,
        'labels' => array(
            'name' => 'Benefits List',
            'add_new_item' => 'Add New Benefits',
            'edit_item' => 'Edit Benefit',
            'all_items' => 'All Benefits',
            'singular_name' => 'Benefit',
        ),
        'menu_icon' => 'dashicons-list-view'
    ));

    register_post_type('processes', array(
        'public' => true,
        'labels' => array(
            'name' => 'Processes List',
            'add_new_item' => 'Add New Process',
            'edit_item' => 'Edit Process',
            'all_items' => 'All Processes',
            'singular_name' => 'Process',
        ),
        'menu_icon' => 'dashicons-list-view'
    ));

    register_post_type('intouchcontacts', array(
        'public' => true,
        'labels' => array(
            'name' => 'Contacts List',
            'add_new_item' => 'Add New Contact',
            'edit_item' => 'Edit Contact',
            'all_items' => 'All Contacts',
            'singular_name' => 'Contact',
        ),
        'menu_icon' => 'dashicons-list-view'
    ));

    register_post_type('servicesbottom', array(
        'public' => true,
        'labels' => array(
            'name' => 'Services Bottom List',
            'add_new_item' => 'Add New Service Bottom',
            'edit_item' => 'Edit Service Bottom',
            'all_items' => 'All Services Bottom',
            'singular_name' => 'Service Bottom',
        ),
        'menu_icon' => 'dashicons-list-view'
    ));
}

add_action('init', 'rekru_post_types');