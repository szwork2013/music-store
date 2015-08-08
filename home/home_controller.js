


app.controller( 'homeController', function($scope,$location,$routeParams,HomeFactory) {


    $scope.album={};
    $scope.albums=[];
    $scope.login='Login'

    $scope.getAlbums=function(){
    HomeFactory.getAlbums().
        success(function (albums) {
            $scope.albums=albums;
        });
    }

    $scope.checkLogin=function(){
        HomeFactory.checkLogin().
            success(function (ifLogin) {
                if(ifLogin){
                    $scope.login='Logout'
                }
                else{
                    $scope.login='Login';
                }
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


    $scope.checkLogin();
    $scope.getWishlistData();
    $scope.getCategories();


}); //close formController



