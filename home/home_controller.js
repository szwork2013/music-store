


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


}); //close formController



