app.factory('categoryFactory',function($http){

    var categoryFactory = {};

    var baseUrl="php/album/album_view.php/";
    
    /** categoryInfo
     *  Ajax http query for the selected category
     *
     *  @param int -the category id
     *  @return object - the category information
     *
     */
    categoryFactory.categoryInfo=function(genre_id){
        return $http.get(baseUrl+'categoryInfo/'+genre_id);
    }

    return categoryFactory;
});


/** myCart
 *  Custom directive
 *
 *  @param void
 *  @return a html element
 *
 */
app.directive('myCart', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/category/myCart.html'
    };
});

