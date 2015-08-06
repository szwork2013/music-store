<?php
include_once(dirname(__FILE__) . '/registerController.php');
include_once(dirname(__FILE__) . '/loginController.php');
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();


$reg=new RegisterController();

$log=new LoginController();

$app->response->headers->set('Content-Type', 'application/json');


$app->post('/register/', function()use ($reg){

	$data = json_decode(file_get_contents("php://input"));
	$reg->insertNew($data);
	
});

$app->post('/login/', function() use ($log){
	
	$data = json_decode(file_get_contents("php://input"));
	$log->checking($data);
	
});
	

	

$app->run();
?>