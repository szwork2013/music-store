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
		$this->register->insertNew($data);
	}
}