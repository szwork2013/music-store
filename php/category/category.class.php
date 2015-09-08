<?php

include_once(dirname(__FILE__) . '/../DB.class.php');

class Category extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}
	
	public function insertNewCategory($categoryData) {
		$sql="INSERT INTO `genres`(`genre_parent_id`, `genre_name`) VALUES ('$categoryData->parentId','$categoryData->name') ";
		$answer=$this->db->query($sql);
	
	}
	
	public function deleteCategory($id) {
		$sql ="DELETE FROM geners WHERE gener_id='$id' ";
		$answer=$this->db->query($sql);
		return $answer;
	}
	
	public function __destruct() {
		$this->db->close();
	}
}