

app.controller( 'checkOutController', function($scope,$route,$location,$routeParams,productService,CheckoutFactory,$window,$rootScope) {
	
	 /** init
     *  create variables and calls functions when  page loading
     *
     *  @param voide
     *  @return voide
     *
     */
	$scope.init=function() {
		$scope.data = {};
		$scope.checkLogin();
		$scope.subTotal();
		$scope.billing=true;
		$scope.payment=false;
		$scope.order=false;
		$scope.x1="red";
		$scope.x2="black";
		$scope.x3="black";

	}
	
	 /** editCart
     *  Redirect to the home page
     *
     *  @param voide
     *  @return voide
     *
     */
	$scope.editCart=function(){
		$location.path('/');
	}

	
	 /** getExpiration
     *  Make the date in proper format that could insert to the sql file
     *
     *  @param void
     *  @return string - expiration month + expiration year with - between them
     *
     */
	$scope.getExpiration=function(){
		if($scope.expiration_month<10){
			$scope.expiration_month='0'+$scope.expiration_month;
		}
		return $scope.expiration_month + '-' + $scope.expiration_year;
	}


	 /** getInputsData
     *  Collect all input fields(user and paymant information) for sending to the server
     *
     *  @param void
     *  @return void
     *
     */
	$scope.getInputsData=function(){
		
		$scope.data={'address': $scope.address,
			'city':$scope.city,
			'zip':$scope.zip,
			'phone':$scope.telephone,
			'paymentWay':$scope.paymentWay,
			'totalPrice':$scope.totalPrice,
			'albumsId':$scope.albumsIdArr
		};
		if($scope.paymentWay!='check'){
			$scope.data['address']= $scope.address;
			$scope.data['name_on_card']=$scope.name_on_card;
			$scope.data['card_number']=$scope.card_number;
			$scope.data['verifaction']=$scope.verifaction;
			$scope.data['expiration']=$scope.getExpiration();
		}
	}

	 /** send
     *  Send info of the user, paymant and the albums that user order
     *
     *  @param void
     *  @return void
     *
     */
	$scope.send=function(){
		$scope.albumsIdArr = new Array();
		for( var i=0 ; i<$scope.cart.length ; i++ ){
			$scope.albumsIdArr[i]=$scope.cart[i].album_id;
		}
		$scope.getInputsData();
		CheckoutFactory.send($scope.data).
              success(function (response) {
				alert(response);
		  });
	}

	 /** subTotal
     *  Calculate the total price of user order
     *
     *  @param void
     *  @return void
     *
     */
	$scope.subTotal=function() {
		$scope.cart = productService.getData("MyCart");
		var totalPrice = 0;
		for (var i = 0; i < $scope.cart.length; i++) {
			totalPrice += $scope.cart[i].album_price * $scope.cart[i].qty;
		}
		$scope.totalPrice=totalPrice;
	}

	
	
	/** func
     *  Close the billing form
     *
     *  @param void
     *  @return void
     *
     */
	$scope.func=function(){
		$scope.billing=false;
	}

	
	 /** changeBillingInfo
     *  Return billing form to be active - user can change his billing info
     *
     *  @param void
     *  @return void
     *
     */
	
	$scope.changeBillingInfo=function(){
		$scope.billing=true;
		$scope.payment=false;
		$scope.order=false;
		$scope.x1="red";
		$scope.x2="black";
		$scope.x3="black";
	}

	 /** changePayment
     *  Return payment form to be active - user can change his payment info
     *
     *  @param void
     *  @return void
     *
     */
	$scope.changePayment=function(){
		if($scope.x3=="red" ||$scope.x2=="red" ){
		$scope.billing=false;
		$scope.payment=true;
		$scope.credit=false;
		$scope.check=false;
		$scope.order=false;
		$scope.x1="black";
		$scope.x2="red";
		$scope.x3="black";
		}
	}

	 /** billingFunc
     *  Close billing form and open the payment form
     *
     *  @param void
     *  @return void
     *
     */
	$scope.billingFunc=function(){
		$scope.billing=false;
		$scope.payment=true;
		$scope.billing_right=true;
		$scope.x1="black";
		$scope.x2="red";
	}

	/** paymentFunc
     *  Close payment form and open the order form
     *
     *  @param void
     *  @return void
     *
     */
	$scope.paymentFunc=function(paymentWay){
		$scope.paymentWay=paymentWay;
		$scope.order=true;
		$scope.payment=false;
		$scope.payment_right=true;
		if($scope.paymentWay=='check'){
			$scope.check=true;
		}
		else{
			$scope.credit=true;
		}
		$scope.x2="black";
		$scope.x3="red";
		if($scope.paymentWay!='check'){
			$scope.the4last=$scope.card_number.slice(-4);
		}

	}

	/** valdiateAdress
     *  Make validation to the address input
     *
     *  @param void
     *  @return void
     *
     */
	$scope.valdiateAdress=function(){
		$scope.addresserror= (/[a-zA-Z]{3,}\s[0-9]{1,}/.test($scope.address)?false:true);
	}

	/** valdiateCity
     *  Make validation to the city input
     *
     *  @param void
     *  @return void
     *
     */
	$scope.valdiateCity=function(){
		$scope.cityerror=  (/[a-zA-Z]{3,}/.test($scope.city)?false:true);

	}

	/** valdiateZipCode
     *  Make validation to the zip code input
     *
     *  @param void
     *  @return void
     *
     */
	$scope.valdiateZipCode=function(){
		$scope.ziperror=  (/[0-9]{1,7}/.test($scope.zip)?false:true);
		
		 
	}
	
	/** valdiatePhone
     *  Make validation to the phone number input
     *
     *  @param void
     *  @return void
     *
     */
	$scope.valdiatePhone=function(){
		$scope.phoneerror=  (/(02|03|04|08|09|072|073|074|076|077|050|052|055|054)[1-9]{7,8}/.test($scope.telephone)?false:true);
	}


	/** valdiateName
     *  Make validation to the user name  input
     *
     *  @param void
     *  @return void
     *
     */
	$scope.valdiateName=function(){
		$scope.nameerror= (/[a-zA-Z]{2,}\s[a-zA-Z]{2,}/.test($scope.name_on_card)?false:true);
	}


	/** validateCardNumber
     *  Make validation to the Card Number input
     *
     *  @param void
     *  @return void
     *
     */
	$scope.validateCardNumber=function(){
		$scope.carderror=(/^[0-9]{16}$/.test($scope.card_number)?false:true);
	}

	/** validateVerifaction
     *  Make validation to the verifaction of the  Card Number 
     *
     *  @param void
     *  @return void
     *
     */
	$scope.validateVerifaction=function(){
		$scope.verifactionerror=(/^[0-9]{3}$/.test($scope.verifaction)?false:true);
	}

	
	/** checkLogin
     *  Checking if the user log-in,if not -redirect to the login page
     *
     *  @param void
     *  @return void
     *
     */
	$scope.checkLogin=function(){
		CheckoutFactory.checkLogin().
			success(function(bool) {
				if(!bool){
					$window.location.href='app/login/login.php'
				}
			});
	}



	$scope.init();

});
