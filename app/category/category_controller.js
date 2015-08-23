


app.controller( 'categoryController', function($scope,$rootScope,$route,$location,$routeParams,categoryFactory,productService) {

    $scope.init=function() {
        $scope.category_id;
        $scope.albumCategory = $routeParams.categoryName;
        $scope.category_id = $routeParams.category_id
        $scope.categoryInfo();
    }


    $scope.goToProductPage=function(id){
        $location.path('/product/' +id);
    }



    $scope.categoryInfo=function(){
        categoryFactory.categoryInfo($scope.category_id).
            success(function (data) {
                $scope.category=data;
                console.log(data);
            });
    }


    $scope.addToCart=function(index) {
        $rootScope.addToCart($scope.category[index].album_id , $scope.category[index]);
    }




    $scope.init();


}); //close categoryController



