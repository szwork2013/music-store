app.factory('HomeFactory',function($http){

    var HomeFactory = {};

    var baseUrl="php/album/album_view.php/";


    HomeFactory.getAlbums=function(){
        return $http.get(baseUrl+'albums/');
    }

    HomeFactory.getCategories=function(){
        return $http.get(baseUrl+'categories/');
    }


    HomeFactory.checkLogin=function(){
        return $http.get('php/register_view.php/checkLogin/');
    }



    return HomeFactory;
});


app.directive('myMenu', function() {
    return {
        restrict: 'E',
        templateUrl: 'category/category_menu.html'
    };
});