<?php


include_once(dirname(__FILE__) . '/album.class.php');

class AlbumController{

    private $album;

    public function __construct() {
        $this->album = new Album();
    }


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