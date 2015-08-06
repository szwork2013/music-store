<?php
include_once(dirname(__FILE__) . '/DB.class.php');

class Login extends DB{

	private $db;

	public function __construct() {
		$this->db = DB::getInstance();
	}

	public function checking($data){
		$password=md5($data->password);
		$sql="SELECT * FROM `users` WHERE  `user_email`='$data->email' AND `user_password`='$password' ";
		return $this->db->query($sql);
		
	}

}