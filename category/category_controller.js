


app.controller( 'categoryController', function($scope,$route,$location,$routeParams,categoryFactory) {


    $scope.whereAmI=function(){
        return $routeParams.categoryName;
    }


    $scope.putData=function(){
        category=$scope.whereAmI();
        $scope.category_container=category;
    }

    $scope.getByCategory=function(){
        categoryFactory.getByCategory().
            success(function (data) {
                $scope.albums=data;
            });
    }



    $scope.getByCategory();
    $scope.putData();
}); //close categoryController



