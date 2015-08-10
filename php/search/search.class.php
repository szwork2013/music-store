<?php
include_once(dirname(__FILE__) . '/../DB.class.php');

class Search extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}

	public function getMatching($word){
		$sql="SELECT song_name FROM songs WHERE song_name like '$word%' ";
		$success=$this->db->query($sql);
		return $success;
		
	}
	
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


}