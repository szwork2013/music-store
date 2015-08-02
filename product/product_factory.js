app.factory('productFactory',function($http){

    var productFactory = {};

    var baseUrl="home/php/index.php/";


    productFactory.getProducts=function(){
        return $http.get(baseUrl+'albums/');
    }



    return productFactory;

}); //close productFactory


