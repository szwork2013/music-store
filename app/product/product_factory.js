app.factory('productFactory',function($http){

    var productFactory = {};

    var baseUrl="php/album/album_view.php/";

    productFactory.getProducts=function(id){
        return $http.get(baseUrl+'album/'+id);
    }

    productFactory.Avibility=function(id){
        return $http.get(baseUrl+'avibility/'+ id );
    }

    return productFactory;
}); //close productFactory


