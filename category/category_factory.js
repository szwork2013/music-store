app.factory('categoryFactory',function($http){

    var categoryFactory = {};

    var baseUrl="php/album_view.php/";


    categoryFactory.getCategoryInfo=function(genre_id){
        return $http.get(baseUrl+'category/'+genre_id);
    }



    return categoryFactory;
});





app.directive('myCart', function() {
    return {
        restrict: 'E',
        templateUrl: 'category/myCart.html'
    };
});