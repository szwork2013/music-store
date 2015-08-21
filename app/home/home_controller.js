


app.controller( 'homeController', function($scope, $rootScope,$timeout,$location,$routeParams,HomeFactory,productService,$http) {


    $scope.init=function() {
        $scope.page= 0;
        $scope.items = [];
        $scope.album={};
        $scope.albums=[];
        $scope.getCategories();
        $scope.fetching = false;
        $scope.disabled = false;
    }


	  $scope.getMore = function() {
          $scope.page++;
          $scope.fetching = true;
          HomeFactory.getMore(4*$scope.page).
              success(function (items) {
                  $scope.fetching = false;
                 if(items){
                     console.log(items);
                     $scope.albums = $scope.albums.concat(items);
                 }
                 else{
                     $scope.disabled = true;
                 }
		  });
		  
      };


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



    $scope.init();

}); //close homeController



