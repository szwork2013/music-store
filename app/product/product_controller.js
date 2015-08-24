

app.controller( 'productController', function($http,$scope,$rootScope,$location,$routeParams,productFactory,productService) {

	
	
	
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

	///Avibility Checking////////////////////////////
	
	$scope.Avibility=function(){
	  var baseUrl='php/album/album_view.php/';
	 $http.get(baseUrl+'avibility/'+ $routeParams.id )
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
	
	$scope.countQty=function(upOrDown){
		if(upOrDown=='up') {
			$scope.Qty++;
		}
		else if($scope.Qty > 0){
			$scope.Qty--;
		}
	}

	$scope.getProducts=function() {
		$scope.id = $routeParams.id;
		productFactory.getProducts($scope.id)
			.success(function (album) {
				$scope.album= album;
				console.log(album);
			});
	}



	//////////////////////////   Local Storage manage    /////////////////////////////////


	$scope.addToWishlist=function(){
					if($scope.heart != 'fullHeart'){
						productService.mergeData($scope.album , 'MyWishList');
						$scope.heart = 'fullHeart';
					}
					else{
						$scope.heart='emptyHeart';
					}
	}

	$scope.addToCart=function() {
		$rootScope.addToCart($scope.album.album_id , $scope.album);
	}


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



