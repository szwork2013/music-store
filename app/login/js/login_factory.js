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


    return LoginFactory;
});
