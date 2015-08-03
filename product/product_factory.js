app.factory('productFactory',function($http){

    var productFactory = {};

    var baseUrl="php/album_view.php/";


    productFactory.getProducts=function(){
        return $http.get(baseUrl+'albums/id');
    }



    return productFactory;

}); //close productFactory


