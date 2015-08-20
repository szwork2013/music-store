

app.controller( 'productController', function($scope,$rootScope,$location,$routeParams,productFactory,productService) {
	
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



	$scope.getProducts();
	$scope.checkIfInWishlist();


}); //close productController



