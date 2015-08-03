<?php

include_once(dirname(__FILE__) . '/home_controller.php');
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$controller = new AlbumController();

$app->response->headers->set('Content-Type', 'application/json');
$app->get('/', function(){echo json_encode( array( "error" => "No method" ) );});

$app->get('/albums/', function(){
    $GLOBALS['controller']->getAllAlbums();
});



$app->run();