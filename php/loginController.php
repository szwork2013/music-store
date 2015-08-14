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
		$success=$this->login->checking($_SESSION['email'],$_SESSION['password']);
		if( mysqli_num_rows($success) > 0){
			header('Location: ../index.html');
		}
		else{
			echo false;
		}
	}




	public function logout(){
		$this->login->logout();
	}



}
