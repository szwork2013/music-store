app.factory('LoginFactory',function($http){

    var LoginFactory = {};

    var baseUrl="php/register_view.php/";

    /** registration
	 *  Registrat ajax , http query for saving new user
	 *
	 *  @param object - user registration info
	 *  @return object - array of validate results , include if the registration succeed or not
	 *
	 */
    
    LoginFactory.registration=function(userInfo){
        return  $http.post(baseUrl+'register' ,angular.toJson(userInfo) );
    }
    
    
    /** login
	 *  Login using email and password;
	 *
	 *  @param object -  email and password
	 *  @return string - response if login succeed or not
	 *
	 */

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