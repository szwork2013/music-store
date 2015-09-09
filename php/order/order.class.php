<?php

include_once(dirname(__FILE__) . '/../DB.class.php');
session_start();



class Order extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}
	
	
	/** deleteOrder
	 *  delete specific order from orders table and from orders_to_albums table
	 *
	 *  @param int - the id of the selected order
	 *  @return void
	 *
	 */
	
	public function deleteOrder($id) {
		$sql ="DELETE FROM orders WHERE order_id='$id' ";
		$answer=$this->db->query($sql);
		$sql ="DELETE FROM orders_to_albums WHERE order_id='$id' ";
		$answer=$this->db->query($sql);
	}
	
	public function __destruct() {
		$this->db->close();
	}
}

?>