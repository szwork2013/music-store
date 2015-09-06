<?php
include_once(dirname(__FILE__) . '/registerController.php');
include_once(dirname(__FILE__) . '/loginController.php');
include_once(dirname(__FILE__) . '/../../../lib/Slim/Slim.php');


\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();


session_start();

include_once(dirname(__FILE__) . '/../autoload.php');
use Facebook\FacebookSession;


$reg=new RegisterController();
$log=new LoginController();

$app->response->headers->set('Content-Type', 'application/json');
$app->get('/', function(){echo json_encode( array( "error" => "No method" ) );});


/** register
 *  route to insertNew function
 *
 *  @param void
 *  @return void
 *
 */
$app->post('/register/', function()use ($reg){
	$data = json_decode(file_get_contents("php://input"));
	$reg->insertNew($data);
	
	
});

/** login
 *  route to checking function
 *
 *  @param object - LoginController object
 *  @return void 
 *
 */
$app->post('/login/', function() use ($log){
	$data = json_decode(file_get_contents("php://input"));
	$log->checking($data);
});



/** checkLogin 
 *  route to checkLogin function
 *
 *  @param object - LoginController object
 *  @return void
 *
 */
$app->get('/checkLogin/', function() use ($log){
	$log->checkLogin();
});


/** fbLogin
 *  make the registration with facebook api
 *
 *  @param object - RegisterController object
 *  @return void
 *
 */
$app->post('/fbLogin/', function() use ($reg) {
	$userFBInfo = json_decode(file_get_contents("php://input"));
	FacebookSession::setDefaultApplication('1415931842065697', '85c1ca9512a00962dd82af6c616e6c88');
	$session = new FacebookSession($userFBInfo->accessToken);
	try {
		$session->validate();
		$reg->fbLogin($userFBInfo);
	}
	catch(Exception $e){
		echo json_encode($e->getMessage());
	}
});

/** logout
 *  route to  logout function
 *
 *  @param object - LoginController object
 *  @return void
 *
 */
$app->get('/logout/', function() use ($log){
	$log->logout();
});



$app->run();
?>