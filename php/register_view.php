<?php
include_once(dirname(__FILE__) . '/registerController.php');

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();


$registerController=new RegisterController();

$app->response->headers->set('Content-Type', 'application/json');


$app->post('/register/', function()use ($registerController){

	$data = json_decode(file_get_contents("php://input"));
	$registerController->insertNew($data);

});

$app->run();
