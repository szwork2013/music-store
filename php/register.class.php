<?php
include_once(dirname(__FILE__) . '/DB.class.php');

class Register extends DB{
	
	private $db;
	
	public function __construct() {
		$this->db = DB::getInstance();
	}
	
	public function insertNew($data){
		$sql="INSERT INTO users ( user_email, user_password, user_firstname, user_lastname) VALUES
			('$data->email','$data->password','$data->firstname','$data->lastname')";
		$answer=$this->db->query($sql);
		return $answer;
	}
}