<?php
include_once(dirname(__FILE__) . '/login.class.php');

class LoginController{
	private $login;

	public function __construct() {
		$this->login = new Login();
	}

	public function checking($data){
		$success=$this->login->checking($data);
		if($success->num_rows){
			$row = $success->fetch_assoc();
			echo 'hello ' . $row['user_firstname'] ;
		}
		else{
			echo "Worng email or password";
		}
	}
}
