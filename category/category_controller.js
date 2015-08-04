


app.controller( 'categoryController', function($scope,$route,$location,$routeParams,categoryFactory) {

    $scope.category_id;
    $scope.albumCategory=$routeParams.categoryName;
    $scope.category_id=$routeParams.category_id



    $scope.goToProductPage=function(id){
        $location.path('/product/' +id);
    }



    $scope.categoryInfo=function(){
        categoryFactory.categoryInfo($scope.category_id).
            success(function (data) {
                //console.log(data);
                $scope.category=data;

            });
    }




    $scope.categoryInfo();


}); //close categoryController



