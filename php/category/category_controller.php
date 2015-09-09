<?php


include_once(dirname(__FILE__) . '/category.class.php');

class categoryController{

    private $category;

    public function __construct() {
        $this->category = new Category();
    }
    
    /**  insertNewCategory
     *  route to insertNewCategory model function
     *
     *
     *  @param object - data of the new category
     *  @return void
     *
     */
    
    public function insertNewCategory($categoryData){
    	
    	$this->category->insertNewCategory($categoryData);
    }
    
    /**  deleteCategory
     *  call to deleteCategory model function
     *
     *
     *  @param int - the id of selected category
     *  @return void
     *
     */
    public function deleteCategory($id){
    	
    	$this->category->deleteCategory($id);
    	 
    }
    
}
 
    
 ?>