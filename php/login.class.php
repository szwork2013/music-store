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



	public function checkFbRegister($fbId){
		$sql="SELECT * from fb_users WHERE user_fb_uid='$fbId' ";
		$answer=$this->db->query($sql);
		return $answer;
	}


	public function register($FBInfo){
		$sql="INSERT INTO users ( user_email, user_firstname, user_lastname)
			 VALUES('$FBInfo->email','$FBInfo->firstname','$FBInfo->lastname')";
		$answer=$this->db->query($sql);
		if($answer){
			$userId=$this->db->insert_id;
			$sql="INSERT INTO  fb_users(user_id,user_fb_uid) VALUES('$userId','$FBInfo->fbId')";
			$answer=$this->db->query($sql);
		}
		return $answer;
	}



}//close Login class