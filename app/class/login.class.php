<?php
include_once(dirname(__FILE__) . '/DB.class.php');

class Login extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}

	public function checking($email,$password){
		$sql="SELECT * FROM users WHERE  user_email='$email' AND user_password='$password' ";
		$answer=$this->db->query($sql);
		return $answer;
	}

	public function createSession($email,$password ){
		$_SESSION['email']=$email;
		$_SESSION['password']=$password;
	}

	public function logout(){
		unset($_SESSION['name'] );
		unset($_SESSION['password'] );
	}









}//close Login class