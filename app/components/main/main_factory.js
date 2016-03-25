app.factory('mainFactory',function($http){

    var mainFactory = {};


    var baseUrl="server/search/search_view.php/"

    /** search
     *  ajax, http query.Searching a song name in data base
     *
     *  @param string  - the word the user is looking for
     *  @return void - if the query success return the seaching results
     *
     */
    mainFactory.search=function(word,callback){
        var http=$http.get(baseUrl+'search/'+word);
        httpHandler(http,callback);
    }

    /** showAlbum
     *  http query for an album id by a song in that album, path this id to product page
     *
     *  @param string -the song name
     *  @return int -id of the album
     *
     */
    mainFactory.showAlbum=function(song,callback){
        var http=$http.get(baseUrl+'getAlbum/'+song);
        httpHandler(http,callback);
    }
    
    
    /** getCategories
     *  ajax, http query from the data base for all the categories
     *
     *  @param void
     *  @return object- all the categories
     *
     */
    mainFactory.getCategories=function(callback){
        var http=$http.get('server/album/album_view.php/categories/');
        httpHandler(http,callback);
    }

    
    
    /** checkLogin
     *  Checking if the user is login or not.And show/hide a selected navigation item.
     *
     *  @param void
     *  @return boolean - if user login or not 
     *
     */
    mainFactory.checkLogin=function(callback){
        var http=$http.get('server/login/register_view.php/checkLogin');
        httpHandler(http,callback);
    }

    
    /** logout
     *  Asking the user if he wants to logout, if he does- it  delete the sessions.
     *
     *  @param void
     *  @return void
     *
     */
    mainFactory.logout=function(callback){
        var http= $http.get('server/login/register_view.php/logout');
        httpHandler(http,callback);
    }



    function httpHandler(http,callback) {
        http.success(function (response){
            callback(null,response);
        }).
        error(function(error){
            callback(error,null);
        });
    }




    return mainFactory;
});


app.directive('mySearch', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/main/search.html'
    };
});
