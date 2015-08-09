app.factory('SearchFactory',function($http){

    var SearchFactory = {};

    var baseUrl="php/search/search_view.php/search/"


    SearchFactory.search=function(word){
        return $http.get(baseUrl+word);
    }


    return SearchFactory;
});

