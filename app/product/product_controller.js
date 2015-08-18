

app.controller( 'productController', function($scope,$location,$routeParams,productFactory,productService) {
	
	$scope.Qty=0;
	$scope.heart='emptyHeart';
	$scope.album={};
	$scope.id;
	$scope.disableHeartBtn=false;


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
			});
	}



	//////////////////////////   Local Storage manage    /////////////////////////////////


	$scope.addToWishlist=function(){
				if($scope.disableHeartBtn==false) {
					productService.mergeData($scope.album , 'MyWishList');
					$scope.heart = 'fullHeart';
					$scope.disableHeartBtn=true;
				}
				else{
					alert('This product already in your wishlist.');
				}
	}

	$scope.addToCart=function() {
		productService.mergeData($scope.album, 'MyCart');
	}


	$scope.checkIfInWishlist=function(){
		var isInWishlist=productService.checkIfInWishlist($routeParams.id);
			if (isInWishlist) {
				$scope.heart = 'fullHeart';
				$scope.disableHeartBtn=true;
			}
	}


	/////////////////////////////////////////////////////////////////////////////////////////



	$scope.getProducts();
	$scope.checkIfInWishlist();


}); //close productController



