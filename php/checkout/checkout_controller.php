<?php

include_once(dirname(__FILE__) . '/checkout.class.php');

class checkoutController{

	private $checkout;

	public function __construct() {
		$this->checkout = new Checkout();
	}

	/** validationForCheck
	 *
	 *  makes validation of order data when order was with check payment
	 *
	 *
	 *  @param object- data of order
	 *  @return object - contains validation results in array
	 *
	 */
	
	
	public function validationForCheck($data){
		$validAddress = preg_match('/[a-zA-Z]{3,}\s[0-9]{1,}/', $data->address);
		$validCity= preg_match('/[a-zA-Z]{3,}/', $data->city);
		$validPhone= preg_match('/(02|03|04|08|09|072|073|074|076|077|050|052|055|054)[1-9]{1}[0-9]{6,7}/', $data->phone);
		$validZip= preg_match('/[0-9]{1,7}/', $data->zip);
		
		if($validAddress+$validCity+$validPhone+$validZip==4){
			$idOrder=$this->checkout->Insert($data);
			$this->checkout->orderToAlbum($data,$idOrder);
		}
		else{
			echo json_encode( array(
					"validAddress" =>$validAddress,
					"validCity"=>$validCity,
					"validPhone"=>$validPhone,
					"validZip"=>$validZip,
			) );
		}
		
	}
	
	
	/** validationForCheck
	 *
	 *  makes validation of order data when order was with credit card payment
	 *
	 *
	 *  @param object- data of order
	 *  @return object - contains validation results in array
	 *
	 */
	
	public function validationForCredit($data){
		$validAddress = preg_match('/[a-zA-Z]{3,}\s[0-9]{1,}/', $data->address);
		$validCity= preg_match('/[a-zA-Z]{3,}/', $data->city);
		$validPhone= preg_match('/(02|03|04|08|09|072|073|074|076|077|050|052|055|054)[1-9]{1}[0-9]{6,7}/', $data->phone);
		$validNameOnCard=preg_match('/[a-zA-Z]{2,}\s[a-zA-Z]{2,}/', $data->name_on_card);
		$validCardNumber=preg_match('/^[0-9]{16}$/', $data->card_number);
		$validVerifaction=preg_match('/^[0-9]{3}$/', $data->verifaction);
		$validExpiration=preg_match('/^([0-9]{2})-([0-9]{4})$/', $data->expiration);
		$validZip= preg_match('/[0-9]{1,7}/', $data->zip);
	
		if($validAddress+$validCity+$validPhone+$validNameOnCard+$validCardNumber+$validVerifaction+$validExpiration+$validZip==8){
			$idOrder=$this->checkout->Insert($data);
			$this->checkout->orderToAlbum($data,$idOrder);
		}
		else{
			echo json_encode( array(
					"validAddress" =>$validAddress,
					"validCity"=>$validCity,
					"validPhone"=>$validPhone,
					"validNameOnCard"=>$validNameOnCard,
					"validCardNumber"=>$validCardNumber,
					"validVerifaction"=>$validVerifaction,
					"validNameOnCard"=>$validNameOnCard,
					"validExpiration"=>$validExpiration,
					"validZip"=>$validZip,
			) );
		}
	}


}
?>