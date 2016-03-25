app.directive('catergoryMenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directives/catergory-menu/catergory-menu.html',
        controller:function($scope,$rootScope,mainFactory,$location){



            /** getCategories
             *  ajax, http query from the data base for all the categories
             *
             *  @param void
             *  @return voide
             *
             */
            mainFactory.getCategories(function(error,categories){
                if(categories){
                    $scope.categories=categories;
                }
            });


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




        }
    };
});