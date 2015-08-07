


app.controller( 'homeController', function($scope,$location,$routeParams,HomeFactory) {


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


    $scope.getCategories=function(){
        HomeFactory.getCategories().
            success(function (categories) {
                console.log(categories);
                $scope.categories=categories;
            });
    }


    $scope.getWishlistData=function(){
        var myWishlist=localStorage.getItem("MyWishList");
        if(myWishlist==null){
            //empty message
        }
        else{
            $scope.myWishlist=angular.fromJson(myWishlist);
        }
    }

    $scope.getWishlistData();
    $scope.getCategories();


}); //close formController



