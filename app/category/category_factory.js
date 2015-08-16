app.factory('categoryFactory',function($http){

    var categoryFactory = {};

    var baseUrl="php/album/album_view.php/";


    categoryFactory.categoryInfo=function(genre_id){
        return $http.get(baseUrl+'categoryInfo/'+genre_id);
    }





    return categoryFactory;
});





app.directive('myCart', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/category/myCart.html'
    };
});
