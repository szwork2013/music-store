<?php

include_once(dirname(__FILE__) . '/../DB.class.php');


class Checkout extends DB{

	private $db;


	public function __construct() {
		$this->db = DB::getInstance();
	}

	public function checkout(){
		 echo json_encode( array( "error" => "No method" ) );
	}
	
	
	public function __destruct() {
		$this->db->close();
	}


}//close class


?>
