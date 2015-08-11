

var app = angular.module('myApp', ['ngRoute']);
app.config( function( $routeProvider ) {
    $routeProvider

        .when( '/', {
            templateUrl : 'regular_login.html',
            controller  : 'ctrl'
        })
        
     

        /*
        .when( '/checkout/', {
            templateUrl : 'checkout/checkout.html',
            controller  : 'checkOutController'
        })
        */
       
});







app.controller('ctrl',function($scope,$http){
	
		
	});