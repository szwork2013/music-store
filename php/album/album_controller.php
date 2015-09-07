<?php


include_once(dirname(__FILE__) . '/album.class.php');

class AlbumController{

    private $album;

    public function __construct() {
        $this->album = new Album();
    }
	
    /**  avibility
		 *  Checking the quantity of selected album
		 *
		 *  @param int - the id of the selected album
		 *  @return object- with the quantity of selected album
		 *
		 */
    
    public function avibility($id){
    	$success=$this->album->avibility($id);
    	$row = $success->fetch_assoc();
    	$instock=$row['album_stock'];
    	echo  json_encode( array( "instock" =>$instock));
    }

    /** toRows
     *  get database return data , check if there is any result,
     *  if true "rows" it and encode it to json format
     *
     *  @param data from database
     *  @return json
     *
     */
    private function toRows($success){
        if( mysqli_num_rows($success) > 0 ) {
            while ($row = $success->fetch_assoc() ) {
                $rows[] = $row;
            }
            return json_encode($rows);
        }
        else{
            return false;
        }
    }


    /** toRow
     *  get database return data , check if there is any result,
     *  if true "row" it and encode it to json format
     *
     *  @param data from database
     *  @return json
     *
     */
    private function  toRow($success){
        if($success) {
            $row = $success->fetch_assoc();
            return json_encode($row);
        }
        else{
            return false;
        }
    }

/**  getAllAlbums
	 *  get all albums information from the database
	 *
	 *  @param void
	 *  @return databse query result
	 *
	 */
	 
    public function getAllAlbums(){
        $success=$this->album->getAllAlbums();
        echo $this->toRows($success);
    }
	
	
	/** getAlbum
	 *  get specific album information from the database
	 *
	 *  @param int - album id
	 *  @return databse query result
	 *
	 */
	 
    public  function getAlbum($id){
        $success=$this->album->getAlbum($id);
        echo $this->toRow($success);
    }

	
	/**  getMore
	 *  get all albums information from the database
	 *
	 *  @param void
	 *  @return databse query result
	 *
	 */
    public  function getMore($offset){
        $success=$this->album->getMore($offset);
        echo $this->toRows($success);
    }
	
/**  getCategories
	 *  get all categories from the batabase
	 *
	 *  @param void
	 *  @return databse query result
	 *
	 */

    public  function  getCategories(){
        $success=$this->album->getCategories();
        echo $this->toRows($success);
    }

/**  getCategoryInfo
	 *  get specific category information
	 *
	 *  @param int the category id
	 *  @return databse query result
	 *
	 */
    public function getCategoryInfo($genre_id,$offset){
        $success=$this->album->getCategoryInfo($genre_id,$offset);
        echo $this->toRows($success);
    }


/** insertNewAlbum
	 *  Adding new album to data base
	 *
	 *  @param object - name,artist, duration,release_year, description, long_description, price,genre_id
	 *  @return string - "A new album successfully created" or "Failed to create a new album"
	 *
	 */

    public function insertNewAlbum($albumData){
        $album_id=$this->album->insertNewAlbum($albumData);
        $success=$this->album->insertNewGenre($album_id,$albumData->genre_id);
        if($success){
            echo json_encode("A new album successfully created");
        }
        else{
            echo json_encode("Failed to create a new album");
        }
    }



    /** newAlbumImage controller
     *  Save and upload new  album's image.
     *
     *  @param object - image information
     *  @return void
     *
     */
    public function newAlbumImage($imageInfo){
        $fileName=$_FILES['file']['name'];
        $dir='images/'.$fileName;
        move_uploaded_file( $_FILES['file']['tmp_name'] ,  $dir );
        $success=$this->album->newAlbumImage($imageInfo,$dir);
        if($success){
            json_encode("A new image successfully saved");
        }
    }



    /** updateAlbum controller
     *  Update a specific column in the album table in the data base
     *
     *  @param array - array of three elments array : [ [a,b,c],[d,e,f] ] .
     *  @return void
     *
     */
    public function updateAlbum($updateingInfo){
        foreach ($updateingInfo as $col){
            $success = $this->album->updateAlbum($col);
            if ($success) {
                json_encode("A new image successfully saved");
            }
        }
    }

    /** deleteAlbum controller
     *  Delete a specific album
     *
     *  @param int - album id
     *  @return void
     *
     */
    public function deleteAlbum($albumId){
        $success = $this->album->deleteAlbum($albumId);
        if ($success) {
            json_encode("Album has been deleted");
        }
    }



}


?>