<?php

include_once(dirname(__FILE__) . '/album_Controller.php');
include_once(dirname(__FILE__) . '/../../lib/Slim/Slim.php');

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$controller = new AlbumController();


$app->response->headers->set('Content-Type', 'application/json');
$app->get('/', function(){echo json_encode( array( "error" => "No method" ) );});

            
$app->get('/avibility/:id', function($id) use ($controller) {
	$controller->avibility($id);
	
});

$app->get('/albums/', function() use ($controller){
    $controller->getAllAlbums();
});

$app->get('/album/:id', function($id)use ($controller){
   $controller->getAlbum($id);
});

$app->get('/getMore/:offset', function($offset)use ($controller){
    $controller->getMore($offset);
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


$app->post('/album/new/', function()use ($controller){
    $albumData=json_decode(file_get_contents("php://input"));
    $controller->insertNewAlbum($albumData);
});

$app->put('/album/', function()use ($controller){
    $updateingInfo=json_decode(file_get_contents("php://input"));
    $controller->updateAlbum($updateingInfo);
});

$app->delete('/album/:id', function($id)use ($controller){
    $controller->deleteAlbum($id);
});


$app->post('/album/image/', function()use ($controller){
    $imageInfo=json_decode(file_get_contents("php://input"));
    $controller->newAlbumImage($imageInfo);
});


$app->run();
