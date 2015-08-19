


app.controller( 'homeController', function($scope, $rootScope,$timeout,$location,$routeParams,HomeFactory,productService) {


    $scope.album={};
    $scope.albums=[];

    $scope.getAlbums=function(){
    HomeFactory.getAlbums().
        success(function (albums) {
            $scope.albums=albums;
        });
    }


    $scope.changeBigPic=function(index){
        $scope.i=index;
    }



    $scope.goToProductPage=function(id){
        $location.path('/product/' +id);
    }


    $scope.addToCart=function(index) {
        $rootScope.addToCart($scope.albums[index].album_id , $scope.albums[index]);
    }

    $scope.getCategories();



}); //close homeController



