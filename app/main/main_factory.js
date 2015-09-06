app.factory('mainFactory',function($http){

    var mainFactory = {};

    var baseUrl="php/search/search_view.php/"

    /** search
     *  ajax, http query.Searching a song name in data base
     *
     *  @param string  - the word the user is looking for
     *  @return void - if the query success return the seaching results
     *
     */
    mainFactory.search=function(word){
        return $http.get(baseUrl+'search/'+word);
    }

    /** showAlbum
     *  http query for an album id by a song in that album, path this id to product page
     *
     *  @param string -the song name
     *  @return int -id of the album
     *
     */
    mainFactory.showAlbum=function(song){
        return $http.get(baseUrl+'getAlbum/'+song);
    }
    
    
    /** getCategories
     *  ajax, http query from the data base for all the categories
     *
     *  @param void
     *  @return object- all the categories
     *
     */
    mainFactory.getCategories=function(){
        return $http.get('php/album/album_view.php/categories/');
    }

    
    
    /** checkLogin
     *  Checking if the user is login or not.And show/hide a selected navigation item.
     *
     *  @param void
     *  @return boolean - if user login or not 
     *
     */
    mainFactory.checkLogin=function(){
        return $http.get('app/login/php/register_view.php/checkLogin');
    }

    
    /** logout
     *  Asking the user if he wants to logout, if he does- it  delete the sessions.
     *
     *  @param void
     *  @return void
     *
     */
    mainFactory.logout=function(){
        return $http.get('app/login/php/register_view.php/logout');
    }


    return mainFactory;
});


app.directive('mySearch', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/main/search.html'
    };
});
