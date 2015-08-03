<?php


include_once(dirname(__FILE__) . '/album.class.php');

class AlbumController{

    private $album;

    public function __construct() {
        $this->album = new Album();
    }

    public function getAllAlbums(){
        $success=$this->album->getAllAlbums();
        if($success==true) {
            while ($row = $success->fetch_assoc()) {
                $rows[] = $row;
            }
            echo json_encode($rows);
        }
        else{
            echo "error";
        }
    }


}


?>