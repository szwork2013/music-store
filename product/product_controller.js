

app.controller( 'productController', function($timeout,$scope,$location,$routeParams,productFactory) {
	
	$scope.Qty=0;
	$scope.heart='emptyHeart';
	$scope.album={};
	$scope.id;

	$scope.countQty=function(upOrDown){
		if(upOrDown=='up') {
			$scope.Qty++;
		}
		else if($scope.Qty > 0){
			$scope.Qty--;
		}
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






	//////////////////////////   Local Storage manage    /////////////////////////////////

	$scope.getWishlistData=function(){
		var whishlist=angular.fromJson(localStorage.getItem("MyWishList") );
		if(whishlist==null){
			$scope.whishlist=[];
		}
		else{
			$scope.whishlist= whishlist;
		}
	}

	$scope.addToWishlist=function(albumId){
		$scope.getWishlistData();
		var newWish={'albumId':albumId};
		$scope.whishlist.push(newWish);
		$scope.updateWishlist();
	}

	$scope.updateWishlist=function(){
		localStorage.setItem("MyWishList", angular.toJson($scope.whishlist) );
		$scope.heart='fullHeart';
	}


	$scope.checkIfInWishlist=function(){
		$scope.getWishlistData();
		var whishlist=$scope.whishlist;
		for(var key in whishlist){
			if( whishlist[key].albumId == $routeParams.id){
				$scope.heart='fullHeart';
			}
		}
	}

	/////////////////////////////////////////////////////////////////////////////////////////


	$scope.getProducts();
	$scope.checkIfInWishlist();



}); //close productController



