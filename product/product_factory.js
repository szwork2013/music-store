app.factory('productFactory',function($http){

    var productFactory = {};

    var baseUrl="php/album_view.php/";


    productFactory.getProducts=function(id){
        return $http.get(baseUrl+'album/'+id);
    }





    return productFactory;

}); //close productFactory


