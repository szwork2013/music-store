<?php

include_once(dirname(__FILE__) . '/album_Controller.php');
include_once(dirname(__FILE__) . '/../../lib/Slim/Slim.php');

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$controller = new AlbumController();


$app->response->headers->set('Content-Type', 'application/json');
$app->get('/', function(){echo json_encode( array( "error" => "No method" ) );});




$app->get('/albums/', function() use ($controller){
    $controller->getAllAlbums();
});

$app->get('/album/:id', function($id)use ($controller){
   $controller->getAlbum($id);
});

$app->get('/categories/', function()use ($controller){
    $controller->getCategories();
});


$app->get('/categoryInfo/:id', function($genre_id)use ($controller){
   $controller->getCategoryInfo($genre_id);
});


$app->get('/getThisCategory/:id', function($genre_id)use ($controller){
    $controller->getThisCategory($genre_id);
});




$app->run();
