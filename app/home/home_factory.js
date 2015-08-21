app.factory('HomeFactory',function($http){

    var HomeFactory = {};

    var baseUrl="php/album/album_view.php/";


    HomeFactory.getAlbums=function(){
        return $http.get(baseUrl+'albums/');
    }

    HomeFactory.getMore=function(scopeId){
        return $http.get(baseUrl+'album/'+scopeId);
    }


    return HomeFactory;
});


