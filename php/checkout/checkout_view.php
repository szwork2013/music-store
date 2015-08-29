<?php

include_once(dirname(__FILE__) . '/checkout_controller.php');
include_once(dirname(__FILE__) . '/../../lib/Slim/Slim.php');

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$checkout=new checkoutController();

$app->response->headers->set('Content-Type', 'application/json');


$app->post('/checkout/', function() use ($checkout) {
	$data = json_decode(file_get_contents("php://input"));
	
	if($data->paymentWay=='check'){
		$checkout->validationForCheck($data);
		//echo json_encode( array("validPhone"=>"check") );
	
	}
	else{
	//	echo json_encode( array("validPhone"=>"credit") );
		$checkout->validationForCredit($data);
	}
	
  
});



$app->run();
