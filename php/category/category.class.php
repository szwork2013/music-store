<?php

include_once(dirname(__FILE__) . '/../DB.class.php');

class Category extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}
	
	/**  insertNewCategory
	 * insert new category to the db
	 *
	 *
	 *  @param object - data of the new category
	 *  @return void
	 *
	 */
	
	public function insertNewCategory($categoryData) {
		$sql="INSERT INTO `genres`(`genre_parent_id`, `genre_name`) VALUES ('$categoryData->parentId','$categoryData->name') ";
		$answer=$this->db->query($sql);
	
	}
	
	/**  deleteCategory
	 *  delete specific category from db
	 *
	 *
	 *  @param int - the id of selected category
	 *  @return void
	 *
	 */
	
	
	public function deleteCategory($id) {
		$sql ="DELETE FROM geners WHERE gener_id='$id' ";
		$answer=$this->db->query($sql);
		return $answer;
	}
	
	public function __destruct() {
		$this->db->close();
	}
}