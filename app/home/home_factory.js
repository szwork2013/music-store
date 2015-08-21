app.factory('HomeFactory',function($http){

    var HomeFactory = {};

    var baseUrl="php/album/album_view.php/";


    HomeFactory.getAlbums=function(){
        return $http.get(baseUrl+'albums/');
    }

    HomeFactory.getMore=function(offset){
        return $http.get(baseUrl+'getMore/'+offset);
    }


    return HomeFactory;
});


