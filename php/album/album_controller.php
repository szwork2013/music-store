<?php


include_once(dirname(__FILE__) . '/album.class.php');

class AlbumController{

    private $album;

    public function __construct() {
        $this->album = new Album();
    }
    
    
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


    public function getAllAlbums(){
        $success=$this->album->getAllAlbums();
        echo $this->toRows($success);
    }

    public  function getAlbum($id){
        $success=$this->album->getAlbum($id);
        echo $this->toRow($success);
    }

    public  function getMore($offset){
        $success=$this->album->getMore($offset);
        echo $this->toRows($success);
    }


    public  function  getCategories(){
        $success=$this->album->getCategories();
        echo $this->toRows($success);
    }


    public function getCategoryInfo($genre_id){
        $success=$this->album->getCategoryInfo($genre_id);
        echo $this->toRows($success);
    }



    
    public function insertNewAlbum($name,$artist, $duration, $release_year, $description, $long_description, $price,$genre_id){
        $album_id=$this->album->insertNewAlbum($name,$artist, $duration, $release_year, $description, $long_description, $price);
        $success=$this->album->insertNewGenre($album_id,$genre_id);
        if($success){
            echo "A new album successfully Created";
        }
        else{
            echo "Failed to createa a new album";
        }

    }


}


?>