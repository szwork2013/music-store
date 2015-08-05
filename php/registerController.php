<?php
include_once(dirname(__FILE__) . '/register.class.php');

class RegisterController{
	private $register;
	
	public function __construct() {
		$this->register = new Register();
	}
	
	
	public function insertNew($data){
		
		$invalidEmail=(!filter_var($data->email, FILTER_VALIDATE_EMAIL) ? true : false);
		$existEmail=(!$sec=$this->register->insertNew($data)? true : false);
		
		
		$fullresponse= array( "ivalidEmail" =>$invalidEmail, "existEmail" =>  $existEmail);
		echo json_encode ($fullresponse);
		
	}


}//close class RegisterController



