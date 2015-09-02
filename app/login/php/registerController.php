<?php
include_once(dirname(__FILE__) . '/../../class/register.class.php');

class RegisterController{
	private $register;
	
	public function __construct() {
		$this->register = new Register();
	}
	
	
	public function insertNew($data){
		$rePswEqual=($data->password==$data->repassword? true : false);
		$lengthPsw=strlen($data->password);
		$pswGoodLength=($lengthPsw>5 AND $lengthPsw< 9 ? true : false);
		$invalidEmail=(!filter_var($data->email, FILTER_VALIDATE_EMAIL) ? true : false);
		$existEmail=(!$sec=$this->register->insertNew($data)? true : false);
		echo  json_encode( array( "ivalidEmail" =>$invalidEmail, "existEmail" =>  $existEmail,"rePswEqual" =>$rePswEqual,"pswGoodLength"=>$pswGoodLength));
	}



	public function fbLogin($userFBInfo){
		$success=$this->register->checkFbRegister($userFBInfo->fbId);
		if($success){
			throw new Exception('You are already registerd');
		}
		else{
			$success=$this->register->register($userFBInfo);
			if($success){
				$this->register->createSession($userFBInfo->email);
				throw new Exception('Hello New User');
			}
			else{
				echo false;
			}
		}
	}

}//close class RegisterController



