<?php
include_once(dirname(__FILE__) . '/register.class.php');

class RegisterController{
	private $register;
	
	public function __construct() {
		$this->register = new Register();
	}
	
	
	public function insertNew($data){
		if(!$this->register->ifEmailExist($data->email)){
			$this->register->insertNew($data);
			return "added new";
		}
		else {
			return "email is allready exist";
		}
		
	}
}