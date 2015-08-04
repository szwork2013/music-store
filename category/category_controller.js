


app.controller( 'categoryController', function($scope,$route,$location,$routeParams,categoryFactory) {

    $scope.category_id;

    $scope.whereAmI=function(){
        return $routeParams.category_id;
    }


    $scope.goToProductPage=function(id){
        $location.path('/product/' +id);
    }

    $scope.getThisCategory=function(){
        $scope.category_id=$scope.whereAmI();
        categoryFactory.getThisCategory($scope.category_id).
            success(function (data) {
                $scope.thisAlbumCategory=data.genre_name;

            });
    }


    $scope.categoryInfo=function(){
        $scope.category_id=$scope.whereAmI();
        categoryFactory.categoryInfo($scope.category_id).
            success(function (data) {
                //console.log(data);
                $scope.category=data;
            });
    }




    $scope.categoryInfo();
    $scope.getThisCategory();

}); //close categoryController



