<?php

include_once(dirname(__FILE__) . '/search.controller.php');
include_once(dirname(__FILE__) . '/../../lib/Slim/Slim.php');

$search=new searchController();

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();


$app->response->headers->set('Content-Type', 'application/json');



$app->get('/search/:word', function($word)use($search){
	$search->getMatching($word);
	//echo $word;
});

$app->get('/getAlbum/:song', function($song)use($search){
	$search->getAlbum($song);
});	

$app->run();
?>