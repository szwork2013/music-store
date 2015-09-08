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
		$word = $this->db->real_escape_string($word);
		$sql="SELECT albums.album_name,albums.album_artist,albums.album_id,albums.album_release_year,images.image_path FROM albums INNER JOIN images
			ON albums.album_id=images.image_id WHERE albums.album_artist like '%$word%'";
		$success=$this->db->query($sql);
		return $success;
	}

	

	public function __destruct() {
		$this->db->close();
	}



}