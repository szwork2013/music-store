<?php

include_once(dirname(__FILE__) . '/album_controller.php');
include_once(dirname(__FILE__) . '/../../lib/Slim/Slim.php');

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$controller = new AlbumController();


$app->response->headers->set('Content-Type', 'application/json');
$app->get('/', function(){echo json_encode( array( "error" => "No method" ) );});

    /**  avibility
	 *  route to avibility function
     *
	 *  @param int - the id of the selected album
     *  @param object - AlbumController object
	 *  @return void
     *
	 */
    $app->get('/avibility/:id', function($id) use ($controller) {
        $controller->avibility($id);
    });


	/**  route to albums function 
	 *  get all albums information from the database
	 *
	 *  @param object - AlbumController object
	 *  @return void
	 *
	 */
    $app->get('/albums/', function() use ($controller){
        $controller->getAllAlbums();
    });


	/** album
	 *  route to album function 
	 *
	 *  @param int - album id
	 *  @param object - AlbumController object
	 *  @return void
	 *
	 */
    $app->get('/album/:id', function($id)use ($controller){
       $controller->getAlbum($id);
    });

	/**  getMore
	 *  route to getMore function 
	 *
	 *  @param int-offset for the sql query
	 *  @param object - AlbumController object
	 *  @return void
	 */
    $app->get('/getMore/:offset', function($offset)use ($controller){
        $controller->getMore($offset);
    });

	/**  categories
	 *  route to getCategories function 
	 *
	 *  object - AlbumController  object
	 *  @return void
	 *
	 */
    $app->get('/categories/', function()use ($controller){
        $controller->getCategories();
    });



	/**  categoryInfo
	 * route to categoryInfo function 
	 *
	 * object - AlbumController object
     *  @param int the category id
     *  @return void
     *
     */
    $app->get('/categoryInfo/:id/:offset', function($genre_id,$offset)use ($controller){
       $controller->getCategoryInfo($genre_id,$offset);
    });






    $app->get('/getThisCategory/:id', function($genre_id)use ($controller){
        $controller->getThisCategory($genre_id);
    });



	/** new
	 *  route to insertNewAlbum function
	 *
	 *  @param object - AlbumController object 
	 *  @param data of album
	 *  @return void
	 *
	 */
    $app->post('/album/new/', function()use ($controller){
        $albumData=json_decode(file_get_contents("php://input"));
        $controller->insertNewAlbum($albumData);
    });

	/** album 
	 * route to album function
	 *
	 *  @param object - AlbumController object 
	 *  @param data of album
	 *  @return void
	 *
	 */
    $app->put('/album/', function()use ($controller){
        $updateingInfo=json_decode(file_get_contents("php://input"));
        $controller->updateAlbum($updateingInfo);
    });

	/** album 
	 *  route to deleteAlbum function 
	 *
	 *  @param object - AlbumController object 
	 *  @param int - album id
	 *  @return void
	 *
	 */
    $app->delete('/album/:id', function($id)use ($controller){
        $controller->deleteAlbum($id);
    });


	/** album
	 *  route to newAlbumImage function
	 *  
	 *  @param object - AlbumController object 
	 *  @param object - image information
	 *  @return void
	 *
	 */
    $app->post('/album/image/', function()use ($controller){
        $imageInfo=json_decode(file_get_contents("php://input"));
        $controller->newAlbumImage($imageInfo);
    });


$app->run();
