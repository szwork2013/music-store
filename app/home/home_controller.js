


app.controller( 'homeController', function($scope, $rootScope,$timeout,$location,$routeParams,HomeFactory,productService,$http) {



    /** init
     *  create variables and calls function on the page loading
     *
     *  @param void
     *  @return void
     *
     */
    $scope.init=function() {
        $scope.page= 4;
        $scope.items = [];
        $scope.album={};
        $scope.albums=[];
        $scope.getCategories();
    }


    /** getMore
     *  ajax, http query for more albom information
     *
     *  @param void
     *  @return void
     *
     */
    
	  $scope.getMore = function() {
          $scope.page++;
          HomeFactory.getMore(3*$scope.page).
              success(function (items) {
                 if(items){
                     $scope.albums = $scope.albums.concat(items);
                 }
		  });
		  
      };



    /** getAlbums
     *  ajax, http query for all album information
     *
     *  @param void
     *  @return void
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



    /** goToProductPage
     *  path to a selected product page
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
        var album=$scope.albums[index];
        album['qty']=1;
        $rootScope.addToCart(album.album_id ,album);
    }



    $scope.init();





}); //close homeController



//app.filter('startFrom', function() {
//    return function(input, start) {
//        if(input) {
//            start = +start; //parse to int
//            return input.slice(start);
//        }
//        return [];
//    }
//});