

app.controller( 'productController', function($rootScope,$timeout,$scope,$location,$routeParams,productFactory) {
	
	$scope.Qty=0;

	$scope.album={};

	$scope.countQty=function(upOrDown){
		if(upOrDown=='up') {
			$scope.Qty++;
		}
		else if($scope.Qty > 0){
			$scope.Qty--;
		}
	}
	
	$scope.funcAddToWishList=function(){
		alert("add to wish list!");
	}
	
	$scope.funcAddToCart=function(){
		alert("add to cart!");
	}


	$scope.getProducts=function() {
		$scope.id = $routeParams.id;
		productFactory.getProducts($scope.id)
			.success(function (album) {
				$scope.album= album;
			});
	}

	$scope.getProducts();




}); //close productController



