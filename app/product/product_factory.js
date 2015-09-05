app.factory('productFactory',function($http){

    var productFactory = {};

    var baseUrl="php/album/album_view.php/";
    
    /** getProducts
	 *  Get  selected album information
	 *
	 *  @param int -id of selected album
	 *  @return object - info about the selected album
	 *
	 */
    productFactory.getProducts=function(id){
        return $http.get(baseUrl+'album/'+id);
    }

    /** Avibility
	 *  check the avibility of an album
	 *
	 *  @param int $routeParams.id -the id of album selected
	 *  @return int -amount of selected album in stock
	 *
	 */
 
    productFactory.avibility=function(id){
        return $http.get(baseUrl+'avibility/'+ id );
    }

    return productFactory;
}); //close productFactory


