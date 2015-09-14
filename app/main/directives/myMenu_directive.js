
app.directive('myMenu', function() {
    return {
        restrict: 'E',
        scope:true,
        templateUrl: 'app/main/directives/category_menu.html',
        controller:function($scope,$rootScope,mainFactory,$location){

            $scope.init=function(){
                $scope.getCategories();
            }


            /** getCategories
             *  ajax, http query from the data base for all the categories
             *
             *  @param void
             *  @return voide
             *
             */
            $scope.getCategories=function(){
                mainFactory.getCategories().
                    success(function (categories) {
                        $scope.categories=categories;
                    });
            }


            /** goCategory
             *  Go to the category page (using route).
             *
             *  @param string,int,int - the category Name,the categoryId,the index of the category
             *  @return void
             *
             */
            $scope.goCategory=function(categoryName,categoryId,index){
                $rootScope.liActive=index;
                $location.url('/category/'+categoryName+'/'+categoryId);
            }


            $scope.init();

        }
    };
});