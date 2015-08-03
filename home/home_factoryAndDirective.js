app.factory('HomeFactory',function($http){

    var HomeFactory = {};

    var baseUrl="php/album_view.php/";


    HomeFactory.getAlbums=function(){
        return $http.get(baseUrl+'albums/');
    }



    return HomeFactory;
});


