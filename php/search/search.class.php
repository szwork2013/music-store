<?php
include_once(dirname(__FILE__) . '/../DB.class.php');

class Search extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}



	/** Model getMatching
	 *  Get a word and find o matching(like) in the databse
	 *
	 *  @param sting $word - the word for search for matching
	 *  @return databse query result
	 *
	 */
	public function getMatching($word){

		//$sql="SELECT album_name FROM songs WHERE song_name like %the";
		//$success=$this->db->query($sql);
		//return $success;

		$word = $this->db->real_escape_string($word);
		$sql="SELECT album_name,album_artist,album_release_year,song_name,image_path
				FROM songs
				INNER JOIN songs_to_albums
						ON songs.song_id = songs_to_albums.song_id
				INNER JOIN albums
						ON songs_to_albums.album_id=albums.album_id
				INNER JOIN images_to_albums
						ON albums.album_id=images_to_albums.album_id
				INNER JOIN images
						ON images_to_albums.image_id=images.image_id
				WHERE song_name like '%$word%' ";
		$success=$this->db->query($sql);
		return $success;

	}

	/** getAlbum
	 *  Get a song name and find the his album's id
	 *
	 *  @param sting $song - the song name
	 *  @return the album id
	 *
	 */
	public function getAlbum($song){
		$sql="SELECT song_id FROM songs WHERE song_name ='$song' ";
		$success=$this->db->query($sql);
		$row = $success->fetch_assoc();
		$song_id= $row['song_id'];
		$sql="SELECT album_id FROM songs_to_albums WHERE song_id ='$song_id' ";
		$success=$this->db->query($sql);
		$row = $success->fetch_assoc();
		return $row['album_id'];
	}


	public function __destruct() {
		$this->db->close();
	}



}