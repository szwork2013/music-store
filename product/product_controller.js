

app.controller( 'productController', function($scope,$location,$routeParams,productFactory) {
	
	$scope.Qty=0;
	$scope.heart='emptyHeart';
	$scope.album={};
	$scope.id;
	$scope.disableHeartBtn=false;
	$scope.localStorageName;

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

	$scope.getData=function(){
		var localData=localStorage.getItem($scope.localStorageName);
		if(localData==null){
			$scope.localData=[];
		}
		else{
			$scope.localData= angular.fromJson(localData);
		}
	}

	$scope.mergeData=function(){
		var newData=$scope.album;
		$scope.localData.push(newData);
		$scope.updateData();
	}

	$scope.updateData=function(){
		localStorage.setItem($scope.localStorageName, angular.toJson($scope.localData) );
		$scope.heart='fullHeart';
		$scope.disableHeartBtn=true;
	}



	$scope.addTo=function(addTo){
		switch(addTo) {
			case ('wish'):
				if($scope.disableHeartBtn==false) {
					$scope.localStorageName='MyWishList';
					$scope.getData();
					$scope.mergeData();
				}
				else{
					alert('This product already in your wishlist.');
				}
			case('cart'):
				$scope.localStorageName='MyCart';
				$scope.getData();
				$scope.mergeData();
		}

	}


	$scope.checkIfInWishlist=function(){
		$scope.localStorageName='MyWishList';
		$scope.getData();
		var wishlist = $scope.localData;
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



