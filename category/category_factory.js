app.factory('categoryFactory',function($http){

    var categoryFactory = {};

    var baseUrl="home/php/index.php/";


    categoryFactory.getByCategory=function(){
        return $http.get(baseUrl+'albums/');
    }



    return categoryFactory;
});




app.directive('myMenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/menu.html'
    };
});


app.directive('myCart', function() {
    return {
        restrict: 'E',
        templateUrl: 'category/myCart.html'
    };
});