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

    
    
    /** fblogin
	 *  Login using facebook 
	 *
	 *  @param object- the user information from facebook
	 *  @return string - rsponse if login succeed or not
	 *
	 */
    
    
    
    LoginFactory.fbLogin=function(userFBInfo){
        return  $http.post(baseUrl+'fbLogin',angular.toJson(userFBInfo) );
    }

    /** login
	 *  ajax request -send charecters that typed in the search input
	 *
	 *  @param string -  charecters that typed in the search input
	 *  @return object - all albums and songs name that was matched to the word 
	 *
	 */
    LoginFactory.search=function(word){
        return $http.get('../../php/search/search_view.php/search/'+word);
    }

    
    
    /** showAlbum
	 *  http query for an album id by a song in that album, path this id to product page
	 *
	 *  @param string - song name
	 *  @return int-album id
	 *
	 */
    
    
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