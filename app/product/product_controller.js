

app.controller( 'productController', function($http,$scope,$rootScope,$location,$routeParams,productFactory,productService) {
	
	$scope.deleteFromCard=function(){
		
		alert();
	}
	
	
	$scope.goCheckOut=function(){
		
		$location.path('/checkout/');
	}
	
	$scope.changePicture=function(image_path,index){
		
		tmp=$scope.big_picture;
		$scope.big_picture=image_path;
		$scope.albums[index].image_path=tmp;
	}

	/** init
	 *  create variables and calls function on the page loading
	 *
	 *  @param voide
	 *  @return voide
	 *
	 */

	$scope.init=function() {
		$scope.Qty = 0;
		$scope.heart = 'emptyHeart';
		$scope.album = {};
		$scope.id;
		$scope.disableHeartBtn = false;
		$scope.getProducts();
		$scope.checkIfInWishlist();
		$scope.Avibility();
	}

	/** getProducts
	 *  Get a selected album(producted) information
	 *
	 *  @param void
	 *  @return void
	 *
	 */
	$scope.getProducts=function() {
		$scope.id = $routeParams.id;
		productFactory.getProducts($scope.id)
			.success(function (album) {

				$scope.albums = 
					[
					    {
					        "image_path" : album.image_path 
					       
					    },
					    {
					    	"image_path" : album.image_path 
					    },
					    {
					        "image_path" : album.image_path 
					       
					    }
					];
				$scope.big_picture=album.image_path;
				
			});
	}
	

	$scope.Avibility=function(){
		productFactory.avibility($routeParams.id )
	    .success(function(response) {
	    	console.log(response);
	    	if (response['instock']==0 || response['instock']==null  ){
	    		$scope.noAvibility=true;
	    	}
	    	else{
	    		$scope.inStock=true;
	    		$scope.quantity=response['instock'];
	    	}
	    });
	}


	/** countQty
	 * Raises and lowers the quantity of a selected album(product)
	 *
	 *  @param string
	 *  @return void - raid or lower the quantity
	 *
	 */
	$scope.countQty=function(upOrDown){
		if(upOrDown=='up') {
			$scope.Qty++;
		}
		else if($scope.Qty > 0){
			$scope.Qty--;
		}
	}



	



	//////////////////////////   Local Storage manage    /////////////////////////////////

	/** addToWishlist
	 *  Add  a new selected produsct(album) to the wishlist
	 *
	 *  @param void
	 *  @return void, will change the heat icon in product page
	 *
	 */
	$scope.addToWishlist=function(){
					if($scope.heart != 'fullHeart'){
						productService.mergeData($scope.album , 'MyWishList');
						$scope.heart = 'fullHeart';
					}
					else{
						$scope.heart='emptyHeart';
					}
	}


	/** addToCart
	 * Calling the addToCart main function to add new product to the cart
	 *
	 *  @param int - the index of selected album in the selected catefory
	 *  @return void
	 *
	 */
	$scope.addToCart=function() {
		$scope.album['qty'] = $scope.Qty;
		$rootScope.addToCart($scope.album.album_id, $scope.album);
	}




	/** checkIfInWishlist
	 * Calling the checkIfInWishlist service to check if a selected producted is already in the wishlist
	 *
	 *  @param void
	 *  @return void
	 */
	$scope.checkIfInWishlist=function(){
		var isInWishlist=productService.checkIfInWishlist($routeParams.id);
			if (isInWishlist) {
				$scope.heart = 'fullHeart';
				$scope.disableHeartBtn=true;
			}
	}
	/////////////////////////////////////////////////////////////////////////////////////////


	$scope.init();



}); //close productController



