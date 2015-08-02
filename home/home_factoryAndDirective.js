app.factory('HomeFactory',function($http){

    var HomeFactory = {};

    var baseUrl="home/php/index.php/";


    HomeFactory.getAlbums=function(){
        return $http.get(baseUrl+'albums/');
    }



    return HomeFactory;
});


