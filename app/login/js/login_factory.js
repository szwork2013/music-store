app.factory('LoginFactory',function($http){

    var LoginFactory = {};

    var baseUrl="php/register_view.php/";


    LoginFactory.registration=function(userInfo){
        return  $http.post(baseUrl+'register' ,angular.toJson(userInfo) );
    }


    LoginFactory.login=function(loginInfo){
        return  $http.post(baseUrl+'login', angular.toJson(loginInfo) );
    }


    LoginFactory.fbLogin=function(userFBInfo){
        return  $http.post(baseUrl+'fbLogin',angular.toJson(userFBInfo) );
    }


    LoginFactory.search=function(word){
        return $http.get('../../php/search/search_view.php/search/'+word);
    }

    LoginFactory.showAlbum=function(song){
        return $http.get('../../php/search/search_view.php/getAlbum/'+song);
    }




    return LoginFactory;
});


app.directive('mySearch', function() {
    return {
        restrict: 'E',
        templateUrl: '../../app/main/search.html'
    };
});