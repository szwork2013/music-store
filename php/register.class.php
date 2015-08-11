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

	public function createSession($email,$password){
		$_SESSION['email']=$email;
		$_SESSION['password']=$password;
	}



	public function checkFbRegister($fbId){
		$sql="SELECT * FROM fb_users INNER JOIN users ON users.user_id=fb_users.user_id WHERE user_fb_uid='$fbId' ";
		$answer=$this->db->query($sql);
		return $answer;
	}


	public function register($FBInfo){
		$password=md5(mt_rand(20,30));
		$sql="INSERT INTO users ( user_email,user_password ,user_firstname, user_lastname)
			 VALUES('$FBInfo->email','$password','$FBInfo->firstname','$FBInfo->lastname')";
		$answer=$this->db->query($sql);
		if($answer){
			$userId=$this->db->insert_id;
			$sql="INSERT INTO  fb_users(user_id,user_fb_uid) VALUES('$userId','$FBInfo->fbId')";
			$answer=$this->db->query($sql);
		}
		return $answer;
	}


}