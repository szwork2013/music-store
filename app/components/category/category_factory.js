app.factory('categoryFactory',function($http){

    var categoryFactory = {};

    var baseUrl="server/album/album_view.php/";
    
    /** categoryInfo
     *  Ajax http query for the selected category
     *
     *  @param int -the category id
     *  @return object - the category information
     *
     */


    categoryFactory.categoryInfo=function(genre_id,offset){
        return $http.get(baseUrl+'categoryInfo/'+genre_id+'/'+offset);
    }



    return categoryFactory;
});



