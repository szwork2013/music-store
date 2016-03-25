var app = angular.module('myApp', ['ngRoute','ngAnimate','tagged.directives.infiniteScroll']);

app.config( function( $routeProvider ) {
    $routeProvider

        .when( '/', {
            templateUrl : 'app/components/home/home.html',
            controller  : 'homeController'
        })
        
     

        .when( '/category/:categoryName/:category_id', {
            templateUrl : 'app/components/category/category.html',
            controller  : 'categoryController'
        })
		
		
		  .when( '/product/:id', {
            templateUrl : 'app/components/product/product.html',
            controller  : 'productController'
        })
        
        .when( '/checkout', {
            templateUrl : 'app/components/checkout.html',
            controller  : 'checkOutController'
        })
       
});
