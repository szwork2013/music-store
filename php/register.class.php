<?php
include_once(dirname(__FILE__) . '/DB.class.php');

class Register extends DB{
	
	private $db;
	
	public function __construct() {
		$this->db = DB::getInstance();
	}
	
	public function insertNew($data){
		$password=md5($data->password);
		$sql="INSERT INTO users ( user_email, user_password, user_firstname, user_lastname) VALUES
			('$data->email','$password','$data->firstname','$data->lastname')";
		$answer=$this->db->query($sql);
		return $answer;
	}

	public function createSession(){
		$_SESSION['name']=$this->name;
		$_SESSION['email']=$this->email;
		$_SESSION['id']=$this->id;
	}

}