<?php

include_once(dirname(__FILE__) . '/checkout.class.php');

class checkoutController{

	private $checkout;

	public function __construct() {
		$this->checkout = new Checkout();
	}

	public function validationForCheck($data){
		$validAddress = preg_match('/[a-zA-Z]{3,}\s[0-9]{1,}/', $data->address);
		$validCity= preg_match('/[a-zA-Z]{3,}/', $data->city);
		$validPhone= preg_match('/(02|03|04|08|09|072|073|074|076|077|050|052|055|054)[1-9]{7,8}/', $data->phone);
		/*
		echo json_encode( array(
				"validAddress" =>$validAddress,
				"validCity"=>$validCity,
				"validPhone"=>$validPhone,
		 ) );
		 */

		if($validAddress+$validCity+$validPhone==3){
			$success=$this->checkout->Insert($data);
			$this->checkout->orderToAlbum($data);
		}
	}
	
	public function validationForCredit($data){
		$validAddress = preg_match('/[a-zA-Z]{3,}\s[0-9]{1,}/', $data->address);
		$validCity= preg_match('/[a-zA-Z]{3,}/', $data->city);
		$validPhone= preg_match('/(02|03|04|08|09|072|073|074|076|077|050|052|055|054)[1-9]{7,8}/', $data->phone);
		$validNameOnCard=preg_match('/[a-zA-Z]{2,}\s[a-zA-Z]{2,}/', $data->name_on_card);
		$validCardNumber=preg_match('/^[0-9]{16}$/', $data->card_number);
		$validVerifaction=preg_match('/^[0-9]{3}$/', $data->verifaction);
		$validExpiration=preg_match('/^([0-9]{2})-([0-9]{4})$/', $data->expiration);
		/*
		echo json_encode( array(
				"validAddress" =>$validAddress,
				"validCity"=>$validCity,
				"validPhone"=>$validPhone,
				"validNameOnCard"=>$validNameOnCard,
				"validCardNumber"=>$validCardNumber,
				"validVerifaction"=>$validVerifaction,
				"validNameOnCard"=>$validNameOnCard,
				"validExpiration"=>$validExpiration,
		) );
		*/
		if($validAddress+$validCity+$validPhone+$validNameOnCard+$validCardNumber+$validVerifaction+$validExpiration==7){
			$this->checkout->Insert($data);
			$this->checkout->orderToAlbum($data);
		}
		
	}


}
?>