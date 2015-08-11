<?php
include_once(dirname(__FILE__) . '/login.class.php');

class LoginController{
	private $login;

	public function __construct() {
		$this->login = new Login();
	}

	public function checking($data){
		$success=$this->login->checking( $data->email , md5($data->password) );
		if($success->num_rows){
			$this->login->createSession( $data->email , md5($data->password));
			$row = $success->fetch_assoc();
			echo 'hello ' . $row['user_firstname'] ;
		}
		else{
			echo "Worng email or password";
		}
	}


	public  function checkLogin(){
		if( isset($_SESSION['email']) && isset($_SESSION['password'])  ){
			$success=$this->login->checking($_SESSION['email'],$_SESSION['password']);
			if($success){
				echo true;
			}
			else{
				echo false;
			}
		}
		else{
			echo false;
		}
	}


	public function fbLogin($userFBInfo){
		$success=$this->login->checkFbRegister($userFBInfo->fbId);
		if( mysqli_num_rows($success) > 0 ){
			throw new Exception('You are already registerd');
		}
		else{
			$success=$this->login->register($userFBInfo);
			if($success){
				throw new Exception('Hello New User');
			}
			else{
				echo false;

			}

		}
	}


	public function logout(){
		$this->login->logout();
	}



}
