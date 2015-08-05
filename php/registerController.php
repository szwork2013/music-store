<?php
include_once(dirname(__FILE__) . '/register.class.php');

class RegisterController{
	private $register;
	
	public function __construct() {
		$this->register = new Register();
	}
	
	public function ifEmailExist($email){
		return ($this->register->ifEmailExist($email));
	}
	
	public function insertNew($data){
		$success=$this->register->insertNew($data);
		if($success) {
			echo "New User is created !";
		}
		else{
			echo "Email is allready exist!";
		}


	}


}//close class RegisterController



