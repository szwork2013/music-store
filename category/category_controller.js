


app.controller( 'categoryController', function($scope,$route,$location,$routeParams,categoryFactory) {

    $scope.category_id;

    $scope.whereAmI=function(){
        return $routeParams.category_id;
    }



    $scope.getCategoryInfo=function(){
        $scope.category_id=$scope.whereAmI();
        categoryFactory.getCategoryInfo($scope.category_id).
            success(function (data) {
                console.log(data);
                $scope.category=data;
            });
    }


    $scope.getCategoryPics=function(){
        categoryFactory.getCategoryPics($scope.category_id).
            success(function (data) {
                console.log(data);
            });
    }


    $scope.getCategoryInfo();

}); //close categoryController



