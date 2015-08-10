app.factory('SearchFactory',function($http){

    var SearchFactory = {};

    var baseUrl="php/search/search_view.php/"


    SearchFactory.search=function(word){
        return $http.get(baseUrl+'search/'+word);
    }

    SearchFactory.showAlbum=function(song){
        return $http.get(baseUrl+'getAlbum/'+song);
    }


    return SearchFactory;
});

