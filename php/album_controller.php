<?php


include_once(dirname(__FILE__) . '/album.class.php');

class AlbumController{

    private $album;

    public function __construct() {
        $this->album = new Album();
    }

    public function getAllAlbums(){
        $success=$this->album->getAllAlbums();
        if($success) {
            while ($row = $success->fetch_assoc()) {
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
        else{
            echo "error";
        }
    }

    public  function getAlbum($id){
        $success=$this->album->getAlbum($id);
        if($success) {
            $row = $success->fetch_assoc();
            echo json_encode($row);
        }
        else{
            echo "error";
        }
    }


    public  function  getCategories(){
        $success=$this->album->getCategories();
        if($success) {
            while ($row = $success->fetch_assoc()) {
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
        else{
            echo "error";
        }
    }


    public function  getCategory($genre_id){
        $success=$this->album->getCategory($genre_id);
        if($success) {
            while ($row = $success->fetch_assoc()) {
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
        else{
            echo "error";
        }
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