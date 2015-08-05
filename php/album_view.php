<?php


include_once(dirname(__FILE__) . '/album_controller.php');
include_once(dirname(__FILE__) . '/registerController.php');

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$controller = new AlbumController();
$registerController=new RegisterController();

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

$app->post('/register/', function()use ($registerController){

   $data = json_decode(file_get_contents("php://input"));
   $registerController->insertNew($data);



//
//   $emailAllreadyExist=$registerController->ifEmailExist($data->email);
//
// 	 if(!$emailAllreadyExist){
// 	 	$registerController->insertNew($data);
// 	 }
// 	 else{
// 	 	echo "email is allready exist!";
// 	 }
   

});

$app->run();
