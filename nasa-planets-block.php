<?php
/*
Plugin Name: NASA Planets Block
Description: Custom block to list planets using NASA API.
Version: 1.0
Author: Seu Nome
*/

function enqueue_nasa_planets_block_assets() {
    wp_enqueue_script(
        'nasa-planets-block',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );
    wp_enqueue_style(
        'nasa-planets-block-editor',
        plugins_url('editor.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );
}
add_action('enqueue_block_editor_assets', 'enqueue_nasa_planets_block_assets');
