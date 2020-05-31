<?php
defined('BASEPATH') or exit('No direct script access allowed');

$route['default_controller']   = 'site';
$route['404_override']         = '';
$route['translate_uri_dashes'] = false;

$route['set']            = 'site/set';
$route['collection']     = 'site/collection';
$route['product']        = 'site/product';
$route['update']         = 'site/update';
