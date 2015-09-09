<?php
include_once(dirname(__FILE__) . '/order_controller.php');
include_once(dirname(__FILE__) . '/../../lib/Slim/Slim.php');


\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$controller = new orderController();


$app->response->headers->set('Content-Type', 'application/json');

/**  order
 *  route to deleteOrder function
 *
 *  @param int - the id of the selected order
 *  @param object - orderController object
 *  @return void
 *
 */
 $app->delete('/order/:id', function($id)use($controller){
 	
        $controller->deleteOrder($id);
      
 });

 

$app->run();

?>
