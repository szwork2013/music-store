<?php


include_once(dirname(__FILE__) . '/category.class.php');

class categoryController{

    private $category;

    public function __construct() {
        $this->category = new Category();
    }
    
    
    public function insertNewCategory($categoryData){
    	
    	$this->category->insertNewCategory($categoryData);
    }
    
    
    public function deleteCategory($id){
    	
    	$this->category->deleteCategory($id);
    	 
    }
    
}
 
    
 ?>