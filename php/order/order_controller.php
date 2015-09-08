<?php


include_once(dirname(__FILE__) . '/order.class.php');

class orderController{

    private $order;

    public function __construct() {
        $this->order = new Order();
    }
    
   
    public function deleteOrder($id){
    	$this->order->deleteOrder($id);
    	 
    }
 
}
 
?>