app.factory('CheckoutFactory',function($http){

    var CheckoutFactory = {};

	var baseUrl="php/checkout/checkout_view.php/";

	 /** send
     *  Send info of the user, paymant and the albums that user order
     *
     *  @param object - data object includes user data,payment data and the albums that user ordered
     *  @return string -  order succeed or failed
     *
     */
    CheckoutFactory.send=function(data){
		return $http.post(baseUrl+'checkout/',angular.toJson(data));
    }

    /** checkLogin
     *  Checking if the user log-in,if not -redirect to the login page
     *
     *  @param void
     *  @return bool - ture if user is login , false -if user not login
     *
     */
    
    CheckoutFactory.checkLogin=function(){
        return $http.get('app/login/php/register_view.php/checkLogin');
    }


    return CheckoutFactory;
});


