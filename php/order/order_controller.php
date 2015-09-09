<?php


include_once(dirname(__FILE__) . '/order.class.php');

class orderController{

    private $order;

    public function __construct() {
        $this->order = new Order();
    }
    
    /** deleteOrder
     *  call to model deleteOrder function
     *
     *  @param int - the id of the selected order
	 *  @param object - orderController object
	 *  @return void
     *
     */
    public function deleteOrder($id){
    	$this->order->deleteOrder($id);
    	 
    }
 
}
 
?>