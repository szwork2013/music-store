<?php
include_once(dirname(__FILE__) . '/DB.class.php');

class Search extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}

	public function getMatching($word){
		$sql="SELECT song_name FROM songs WHERE song_name like '$word%' ";
		$success=$this->db->query($sql);
		return $success;
		//$row = $success->fetch_assoc();
	//	echo $row['song_name'];
		//return $answer;
	
	
	}


}