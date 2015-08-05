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
		$rePswEqual=($data->password==$data->repassword? true : false);
		$lengthPsw=strlen($data->password);
		$pswGoodLength=($lengthPsw>5 AND $lengthPsw< 9 ? true : false);
		echo  json_encode( array( "ivalidEmail" =>$invalidEmail, "existEmail" =>  $existEmail,"rePswEqual" =>$rePswEqual,"pswGoodLength"=>$pswGoodLength));
	}


}//close class RegisterController



