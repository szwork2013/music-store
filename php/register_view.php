<?php
include_once(dirname(__FILE__) . '/registerController.php');

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();


$reg=new RegisterController();

$app->response->headers->set('Content-Type', 'application/json');


$app->post('/register/', function()use ($reg){

	$data = json_decode(file_get_contents("php://input"));
	$reg->insertNew($data);
	
});



	

$app->run();
?>