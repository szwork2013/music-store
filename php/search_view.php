<?php

require 'search.controller.php';

require 'Slim/Slim.php';

$search=new searchController();

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();



$app->get('/search/:word', function($word)use($search){
	$search->getMatching($word);
});

$app->get('/getAlbum/:song', function($song)use($search){
	$search->getAlbum($song);
	
	//echo "hello";
});	

$app->run();
?>