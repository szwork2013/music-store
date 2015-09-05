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


	/** insertNewAlbum
	 *  Adding new album to data base
	 *
	 *  @param object - name,artist, duration,release_year, description, long_description, price,genre_id
	 *  @return int - the  new  album id
	 *
	 */
	public function insertNewAlbum($albumData){
		$sql="INSERT INTO albums(album_name, album_artist,album_duration, album_release_year, album_description, album_long_description, album_price)
			  VALUES ('$albumData->name', '$albumData->artist', '$albumData->duration', '$albumData->release_year', '$albumData->description', '$albumData->long_description', $albumData->price)";
		$answer=$this->db->query($sql);
		if($answer){
			$album_id=$this->db->insert_id;
			return $album_id;
		}
	}


	/** insertNewGenre
	 *  Adding new genre to data base
	 *
	 *  @param int,int - the album id , the  genreid
	 *  @return bool
	 *
	 */
	public  function insertNewGenre($album_id,$genre_id){
		$sql="INSERT INTO genres_to_albums(album_id,genre_id) VALUES ('$album_id','$genre_id') ";
		$answer=$this->db->query($sql);
		return $answer;
	}



	/** newAlbumImage
	 *  Save new  album image information
	 *
	 *  @param object,string - image information , the new image saved path
	 *  @return bool
	 *
	 */
	public function newAlbumImage($imageInfo,$dir){
		$sql="INSERT INTO images(image_path,image_title) VALUES ('$dir','$imageInfo->title') ";
		$answer=$this->db->query($sql);
		if($answer){
			$imageId=$this->db->insert_id;
			$this->imagesToAlbums($imageId,$imageInfo->albumId);
		}
		return false;
	}


	public function imagesToAlbums($imageId,$albumId){
		$sql="INSERT INTO images_to_albums(image_id,album_id) VALUES ('$imageId','$albumId') ";
		$answer=$this->db->query($sql);
		return $answer;
	}


	/** updateAlbum
	 *  Update a specific column in the album table in the data base
	 *
	 *  @param array - 3 elments -  index 0: column head key , index 1: update value , index 2 : the album id.
	 *  @return bool
	 *
	 */
	public function updateAlbum($col){
		$sql="UPDATE albums SET '$col[0]'='$col[1]' WHERE album_id='$col[2]' ";
		$answer=$this->db->query($sql);
		return $answer;
	}



	/** deleteAlbum
	 *  Delete a specific album
	 *
	 *  @param int - album id
	 *  @return bool
	 *
	 */
	public function deleteAlbum($albumId){
		$sql ="DELETE FROM albums WHERE album_id='$albumId' ";
		$answer=$this->db->query($sql);
		return $answer;
	}



	public function __destruct() {
		$this->db->close();
	}


}//close class


?>