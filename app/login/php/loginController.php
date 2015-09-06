<?php
include_once(dirname(__FILE__) . '/../../class/login.class.php');

class LoginController{
	private $login;

	
	
	public function __construct() {
		$this->login = new Login();
	}

	/** checking
	 *  check if email and password correct
	 *
	 *  @param object - email and password
	 *  @return string - response if succeed  or  email and passsword worng
	 *
	 */
	public function checking($data){
		$success =$this->login->checking( $data->email , md5($data->password) );
		if( mysqli_num_rows($success)>0 ){
			$this->login->createSession( $data->email , md5($data->password));
			echo json_encode('You have successfuly logged in.')  ;
		}
		else{
			echo json_encode("Worng email or password");
		}
	}

	/** checkLogin
	 *  check if user login
	 *
	 *  @param void
	 *  @return boolean - response if user is allready login 
	 *
	 */
	public  function checkLogin(){
		if( isset($_SESSION['email']) && isset($_SESSION['password']) ) {
			$success = $this->login->checking($_SESSION['email'], $_SESSION['password']);
			if (mysqli_num_rows($success) > 0) {
				echo true;
			} else {
				echo false;
			}
		}
		else {
			echo false;
		}
	}


	public function logout(){
		$this->login->logout();
	}



}
