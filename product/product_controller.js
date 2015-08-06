

app.controller( 'productController', function($scope,$location,$routeParams,productFactory) {
	
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

		var wishlist=localStorage.getItem("MyWishList");
		if(wishlist==null){
			$scope.wishlist=[];
		}
		else{
			$scope.wishlist= angular.fromJson(wishlist);
		}
	}

	$scope.addToWishlist=function(){
		if($scope.disableHeartBtn==false) {
			$scope.getWishlistData();
			var newWish=$scope.album;
			$scope.wishlist.push(newWish);
			$scope.updateWishlist();
		}
		else{
			alert('This product already in your wishlist.');
		}
	}

	$scope.updateWishlist=function(){
		localStorage.setItem("MyWishList", angular.toJson($scope.wishlist) );
		$scope.heart='fullHeart';
		$scope.disableHeartBtn=true;
	}


	$scope.checkIfInWishlist=function(){
		$scope.getWishlistData();
		var wishlist = $scope.wishlist;
		for (var key in wishlist) {
			if (wishlist[key].album_id == $routeParams.id) {
				$scope.heart = 'fullHeart';
				$scope.disableHeartBtn=true;
			}
		}
	}

	/////////////////////////////////////////////////////////////////////////////////////////



	$scope.getProducts();
	$scope.checkIfInWishlist();



}); //close productController



