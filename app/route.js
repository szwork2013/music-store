var app = angular.module('myApp', ['ngRoute']);

app.config( function( $routeProvider ) {
    $routeProvider

        .when( '/', {
            templateUrl : 'home/home.html',
            controller  : 'homeController'
        })


        .when( '/category/:categoryName', {
            templateUrl : 'category/category.html',
            controller  : 'categoryController'
        })
		
		
		  .when( '/product/:id', {
            templateUrl : 'product/product.html',
            controller  : 'productController'
        })
});
