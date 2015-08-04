<?php

include_once(dirname(__FILE__) . '/DB.class.php');
include_once(dirname(__FILE__) . '/album_controller.php');

class Album extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}


	public function getAllAlbums(){
		$sql="SELECT album_id,album_artist,album_price,album_name,image_path
			  FROM albums
			  INNER JOIN images
				  ON albums.album_id=images.image_id";
		$answer=$this->db->query($sql);
		return $answer;
	}


	public  function getAlbum($id){
		$sql="SELECT *
			FROM albums
			INNER JOIN images
				ON albums.album_id=images.image_id
			WHERE album_id='$id' ";
		$answer=$this->db->query($sql);
		return $answer;
	}

	public  function getCategories(){
		$sql="SELECT * FROM genres ";
		$answer=$this->db->query($sql);
		return $answer;
	}



	public  function getCategoryInfo($genre_id){
		$sql="SELECT albums.album_id,album_name,image_path,album_artist,album_price
				FROM images_to_albums
				INNER JOIN genres_to_albums
					ON images_to_albums.album_id = genres_to_albums.album_id
				INNER JOIN images
					ON images.image_id=images_to_albums.image_id
				INNER JOIN albums
					ON albums.album_id=images_to_albums.album_id
				WHERE genre_id='$genre_id' ";
		$answer=$this->db->query($sql);
		return $answer;
	}


	








	public function insertNewAlbum($name,$artist, $duration, $release_year, $description, $long_description, $price,$genre_id){
		$sql="INSERT INTO albums(album_name, album_artist,album_duration, album_release_year, album_description, album_long_description, album_price)
			  VALUES ('$name', '$artist', '$duration', '$release_year', '$description', '$long_description', $price)";
		$answer=$this->db->query($sql);
		if($answer){
			$album_id=$this->db->insert_id;
			return $album_id;
		}
	}

	public  function insertNewGenre($album_id,$genre_id){
		$sql="INSERT INTO genres_to_albums(album_id,genre_id) VALUES ('$album_id','$genre_id') ";
		$answer=$this->db->query($sql);
		return $answer;
	}




//$sql="INSERT INTO genres(genre_parent_id,genre_name) VALUES (1,'Pop')";
///$sql="INSERT INTO genres_to_albums(album_id,genre_id) VALUES (1,'Pop')";


	public function __destruct() {
		$this->db->close();
	}


}//close class


?>