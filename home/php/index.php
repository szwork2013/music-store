<?php
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->contentType( 'application/json' );
$app->get( '/', function(){ echo json_encode( array( "error" => 1, "msg" => "No method selected" ) );});

$app->get('/albums/', function(){
	echo file_get_contents( "data/albums.json" );
});



$app->run();