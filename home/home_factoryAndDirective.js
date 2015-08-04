app.factory('HomeFactory',function($http){

    var HomeFactory = {};

    var baseUrl="php/album_view.php/";


    HomeFactory.getAlbums=function(){
        return $http.get(baseUrl+'albums/');
    }

    HomeFactory.getCategories=function(){
        return $http.get(baseUrl+'categories/');
    }


    return HomeFactory;
});


