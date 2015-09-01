<?php

include_once(dirname(__FILE__) . '/../DB.class.php');
include_once(dirname(__FILE__) . '/album_controller.php');

class Album extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}

	public function avibility($id){
		$sql="SELECT * FROM albums_stock WHERE album_id='$id'";
		$answer=$this->db->query($sql);
		return $answer;
	}
	
	/** Model getAllAlbums
	 *  get all albums information from the database
	 *
	 *  @param void
	 *  @return databse query result
	 *
	 */
	public function getAllAlbums(){
		$sql="SELECT album_id,album_artist,album_price,album_created,album_name,image_path
			  FROM albums
			  INNER JOIN images
				  ON albums.album_id=images.image_id
				  ORDER BY album_created ASC LIMIT 15 ";
		$answer=$this->db->query($sql);
		return $answer;
	}



	/** Model getMore
	 *  get all albums information from the database
	 *
	 *  @param void
	 *  @return databse query result
	 *
	 */
	public function getMore($offset){
		$sql="SELECT album_id,album_artist,album_price,album_name,album_created,image_path
			  FROM albums
			  INNER JOIN images
				  ON albums.album_id=images.image_id
			   ORDER BY album_created ASC LIMIT 3 OFFSET $offset";
		$answer=$this->db->query($sql);
		return $answer;
	}




	/** Model getAlbum
	 *  get specific album information from the database
	 *
	 *  @param int - album id
	 *  @return databse query result
	 *
	 */
	public  function getAlbum($id){
		$sql="SELECT album_id,album_artist,album_description,album_long_description,album_name,album_price,image_path
			FROM albums
			INNER JOIN images
				ON albums.album_id=images.image_id
			WHERE album_id='$id' ";
		$answer=$this->db->query($sql);
		return $answer;
	}

	/** Model getCategories
	 *  get all categories from the batabase
	 *
	 *  @param void
	 *  @return databse query result
	 *
	 */
	public  function getCategories(){
		$sql="SELECT * FROM genres ";
		$answer=$this->db->query($sql);
		return $answer;
	}



	/** Model getCategoryInfo
	 *  get specific category information
	 *
	 *  @param int the category id
	 *  @return databse query result
	 *
	 */
	public  function getCategoryInfo($genre_id){
		$sql="SELECT albums.album_id,album_name,image_path,album_artist,album_price,album_description
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



	public function __destruct() {
		$this->db->close();
	}


}//close class


?>