<?php
include_once(dirname(__FILE__) . '/category_controller.php');
include_once(dirname(__FILE__) . '/../../lib/Slim/Slim.php');


\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$controller = new categoryController();


$app->response->headers->set('Content-Type', 'application/json');


$app->post('/category/', function()use ($controller){
       $categoryData=json_decode(file_get_contents("php://input"));
       $controller->insertNewCategory($categoryData);
     
});



 $app->delete('/category/:id', function($id)use ($controller){
        $controller->deleteCategory($id);
 });



$app->run();