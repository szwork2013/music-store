var app = angular.module('myApp', ['ngRoute','ngAnimate']);

app.config( function( $routeProvider ) {
    $routeProvider

        .when( '/', {
            templateUrl : 'home/home.html',
            controller  : 'homeController'
        })
        
     

        .when( '/category/:categoryName/:category_id', {
            templateUrl : 'category/category.html',
            controller  : 'categoryController'
        })
		
		
		  .when( '/product/:id', {
            templateUrl : 'product/product.html',
            controller  : 'productController'
        })
        
        .when( '/checkout/', {
            templateUrl : 'checkout/checkout.html',
            controller  : 'checkOutController'
        })
       
});
