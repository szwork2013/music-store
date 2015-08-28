<?php

include_once(dirname(__FILE__) . '/../DB.class.php');
session_start();

class Checkout extends DB{

	private $db;
	private $newOrder;

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
		$this->newOrder = $this->db->insert_id;
		return $answer;
	}

	public function orderToAlbum($data){
		$bool=true;
		for($i=0; $i < 3; $i++){
			$tmp=$data->albumsId[$i];
			$sql="INSERT INTO orders_to_albums(order_id, album_id) VALUES ('$this->newOrder','$tmp')";
			$answer=$this->db->query($sql);
			if(!$answer){
				$bool=false;
			}
		}
		if($bool){
			echo "New Order has been saved.";
		}
		else{
			echo "Error, please try again.";
		}
	}
	
	
	
	
	public function __destruct() {
		$this->db->close();
	}


}//close class


?>
