<?php
include_once(dirname(__FILE__) . '/DB.class.php');

class Register extends DB{
	
	private $db;
	
	public function __construct() {
		$this->db = DB::getInstance();
	}
	
//	public function ifEmailExist($userEmail){
//		$sql="SELECT user_email FROM users WHERE user_email='$userEmail'";
//		$res=$this->db->query($sql);
//		$row=$res->fetch_assoc();
//		return($res->num_rows);
//	}
	
	public function insertNew($data){
//		$tmp=$data->firstname;
		$sql="INSERT INTO users ( user_email, user_password, user_firstname, user_lastname) VALUES
			('$data->email','$data->password','$data->firstname','$data->lastname')";
		$answer=$this->db->query($sql);
		return $answer;
	}
}