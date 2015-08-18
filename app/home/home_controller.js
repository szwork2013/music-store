


app.controller( 'homeController', function($scope,$timeout,$location,$routeParams,HomeFactory,productService,$http) {


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
        productService.mergeData($scope.albums[index], 'MyCart');
        alert("This album added to your cart");
    }

    $scope.getCategories();



}); //close homeController



