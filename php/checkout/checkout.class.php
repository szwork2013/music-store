<?php

include_once(dirname(__FILE__) . '/../DB.class.php');
session_start();

class Checkout extends DB{

	private $db;
	

	public function __construct() {
		$this->db = DB::getInstance();
	}

	
	
	public function Insert($data){
	
		$userId = $_SESSION['id'];
		$sql = "INSERT INTO orders( user_id, order_shipping_address,
				 order_shipping_city, order_shipping_zipcode, order_shipping_phone,
				order_payment_method, order_total)
				VALUES ( '$userId','$data->address','$data->city','$data->zip','$data->phone','$data->paymentWay','$data->totalPrice')";
		$answer = $this->db->query($sql);
		
		return $this->db->insert_id;

	
	}

	public function orderToAlbum($data,$idOrder){
		$bool=true;
		for($i=0; $i < count($data->albumsId); $i++){
			$tmp=$data->albumsId[$i];
			$sql="INSERT INTO orders_to_albums(order_id, album_id) VALUES ('$idOrder','$tmp')";
			$answer=$this->db->query($sql);
			if(!$answer){
				$bool=false;
			}
		}
		if($bool){
			echo json_encode("New Order has been saved". "$idOrder");
		}
		else{
			echo json_encode("Error, please try again.");
		}
	}
	

	
	public function __destruct() {
		$this->db->close();
	}


}//close class


?>
