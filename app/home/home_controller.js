


app.controller( 'homeController', function($scope, $rootScope,$timeout,$location,$routeParams,HomeFactory,productService,$http) {

	$scope.id=0;
	  $scope.items = [];
	  $scope.getMore = function() {
		  $scope.id++;
	
		  $http.get("php/album/album_view.php/album/" +$scope.id).success(function (items) { 	
			 if(items!=null){
				 console.log(items);
				  $scope.albums = $scope.albums.concat(items);
			 }
		  
		  });
		  
		  
	  };
    $scope.album={};
    $scope.albums=[];

    $scope.func=function(){
    	$scope.x=true;
    }

    /** getAlbums
     *  ajax, http query for all album information
     *
     *  @param voide
     *  @return object of all the albums information
     *
     */
    $scope.getAlbums=function(){
    HomeFactory.getAlbums().
        success(function (albums) {
            $scope.albums=albums;
        });
    }

    /** changeBigPic
     *  place  a big picture
     *
     *  @param int a specific album index from the albums object
     *  @return void
     *
     */
    $scope.changeBigPic=function(index){
        $scope.i=index;
    }


    /** goToProductPage
     *  path to the product page
     *
     *  @param int the product id
     *  @return voide
     *
     */
    $scope.goToProductPage=function(id){
        $location.path('/product/' +id);
    }


    /** addToCart
     *  add to the cart a chosen product(album)
     *
     *  @param int the product index, specific album index from the albums object
     *  @return calling addToCart function
     *
     */
    $scope.addToCart=function(index) {
        $rootScope.addToCart($scope.albums[index].album_id , $scope.albums[index]);
    }

    $scope.getCategories();



}); //close homeController



