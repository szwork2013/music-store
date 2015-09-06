<?php

include_once(dirname(__FILE__) . '/search.controller.php');
include_once(dirname(__FILE__) . '/../../lib/Slim/Slim.php');

$search=new searchController();

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

/** search
 * route to search function 
 *
 *
 *  @param object- searchController object
 *  @param string- charecters that the user typed 
 *  @return void
 *
 */
$app->get('/search/:word', function($word)use($search){
	$search->getMatching($word);
});

/** getAlbum
 *route to getAlbum function
 *
 * @param object- searchController object
 * @param string- charecters that the user typed 
 *  @return void
 *
 */
$app->get('/getAlbum/:song', function($song)use($search){
	$search->getAlbum($song);
});	

$app->run();
?>