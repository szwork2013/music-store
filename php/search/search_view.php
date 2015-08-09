<?php

include_once(dirname(__FILE__) . '/search.controller.php');
include_once(dirname(__FILE__) .  '/../Slim/Slim.php');

$search=new searchController();

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();



$app->get('/search/:word', function($word) use ($search){
	$search->getMatching($word);
});

	

$app->run();
?>