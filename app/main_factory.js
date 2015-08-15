app.factory('mainFactory',function($http){

    var mainFactory = {};

    var baseUrl="php/search/search_view.php/"


    mainFactory.search=function(word){
        return $http.get(baseUrl+'search/'+word);
    }

    mainFactory.showAlbum=function(song){
        return $http.get(baseUrl+'getAlbum/'+song);
    }

    mainFactory.getCategories=function(){
        return $http.get('php/album/album_view.php/categories/');
    }

    mainFactory.logout=function(){
        return $http.get('php/register_view.php/logout');
    }


    return mainFactory;
});

