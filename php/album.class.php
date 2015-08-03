<?php

include_once(dirname(__FILE__) . '/DB.class.php');
include_once(dirname(__FILE__) . '/album_controller.php');

class Album extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}


	public function getAllAlbums(){
		$sql="SELECT * FROM albums INNER JOIN images ON albums.album_id=images.image_id";
		$answer=$this->db->query($sql);
		return $answer;
	}



	public function insertNewAlbum($name,$artist, $duration, $release_year, $description, $long_description, $price){
		$sql="INSERT INTO albums(album_name, album_artist,album_duration, album_release_year, album_description, album_long_description, album_price)
			  VALUES ('$name', '$artist', '$duration', '$release_year', '$description', '$long_description', $price)";
		$answer=$this->db->query($sql);
	}



	public function __destruct() {
		$this->db->close();
	}


}//close class


?>