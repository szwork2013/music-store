app.factory('CheckoutFactory',function($http){

    var CheckoutFactory = {};

	var baseUrl="php/checkout/checkout_view.php/";


    CheckoutFactory.send=function(data){
		return $http.post(baseUrl+'checkout/',angular.toJson(data));
    }


    return CheckoutFactory;
});

