app.factory('HomeFactory',function($http){

    var HomeFactory = {};

    var baseUrl="server/album/album_view.php/";

    /** getAlbums
     *  ajax, http query for all album information
     *
     *  @param void
     *  @return object of all the albums information
     *
     */
    
    HomeFactory.getAlbums=function(){
        return $http.get(baseUrl+'albums/');
    }

    
    /** getMore
     *  ajax, http query for more albom information
     *
     *  @param int - offset to the sql query
     *  @return object of all more albums information
     *
     */
    
    HomeFactory.getMore=function(offset){
        return $http.get(baseUrl+'getMore/'+offset);
    }


    return HomeFactory;
});


