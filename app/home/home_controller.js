


app.controller( 'homeController', function($scope, $rootScope,$timeout,$location,$routeParams,HomeFactory,productService) {


    $scope.album={};
    $scope.albums=[];



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



