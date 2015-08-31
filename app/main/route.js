var app = angular.module('myApp', ['ngRoute','ngAnimate']);

app.config( function( $routeProvider ) {
    $routeProvider

        .when( '/', {
            templateUrl : 'app/home/home.html',
            controller  : 'homeController'
        })
        
     

        .when( '/category/:categoryName/:category_id', {
            templateUrl : 'app/category/category.html',
            controller  : 'categoryController'
        })
		
		
		  .when( '/product/:id', {
            templateUrl : 'app/product/product.html',
            controller  : 'productController'
        })
        
        .when( '/checkout', {
            templateUrl : 'app/checkout/checkout.html',
            controller  : 'checkOutController'
        })
       
});
