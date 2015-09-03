

app.controller( 'checkOutController', function($scope,$route,$location,$routeParams,productService,CheckoutFactory,$window,$rootScope) {

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
	$scope.editCart=function(){
		$location.path('/');
	}

	
	
	
	$scope.getExpiration=function(){
		if($scope.expiration_month<10){
			$scope.expiration_month='0'+$scope.expiration_month;
		}
		return $scope.expiration_month + '-' + $scope.expiration_year;
	}
	
	
	
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


	$scope.subTotal=function() {
		$scope.cart = productService.getData("MyCart");
		var totalPrice = 0;
		for (var i = 0; i < $scope.cart.length; i++) {
			totalPrice += $scope.cart[i].album_price * $scope.cart[i].qty;
		}
		$scope.totalPrice=totalPrice;
	}


	$scope.func=function(){
		$scope.billing=false;
	}

	$scope.changeBillingInfo=function(){
		$scope.billing=true;
		$scope.payment=false;
		$scope.order=false;
		$scope.x1="red";
		$scope.x2="black";
		$scope.x3="black";
	}

	$scope.changePayment=function(){
		if($scope.x3=="black" ||$scope.x2=="black" ){
		$scope.billing=false;
		$scope.payment=true;
		$scope.order=false;
		$scope.x1="black";
		$scope.x2="red";
		$scope.x3="black";
		}
	}


	$scope.billingFunc=function(){
		$scope.billing=false;
		$scope.payment=true;
		$scope.billing_right=true;
		$scope.x1="black";
		$scope.x2="red";
	}

	$scope.paymentFunc=function(paymentWay){
		$scope.paymentWay=paymentWay;
		$scope.order=true;
		$scope.payment=false;
		$scope.payment_right=true;
		$scope.x2="black";
		$scope.x3="red";
		if($scope.paymentWay!='check'){
			$scope.the4last=$scope.card_number.slice(-4);
		}

	}

	$scope.valdiateAdress=function(){
		$scope.addresserror= (/[a-zA-Z]{3,}\s[0-9]{1,}/.test($scope.address)?false:true);
	}

	$scope.valdiateCity=function(){
		$scope.cityerror=  (/[a-zA-Z]{3,}/.test($scope.city)?false:true);

	}

	
	$scope.valdiateZipCode=function(){
		$scope.ziperror=  (/[0-9]{1,7}/.test($scope.zip)?false:true);
		
		 
	}
	

	$scope.valdiatePhone=function(){
		$scope.phoneerror=  (/(02|03|04|08|09|072|073|074|076|077|050|052|055|054)[1-9]{7,8}/.test($scope.telephone)?false:true);
	}

	$scope.valdiateName=function(){
		$scope.nameerror= (/[a-zA-Z]{2,}\s[a-zA-Z]{2,}/.test($scope.name_on_card)?false:true);
	}

	$scope.validateCardNumber=function(){
		$scope.carderror=(/^[0-9]{16}$/.test($scope.card_number)?false:true);
	}

	$scope.validateVerifaction=function(){
		$scope.verifactionerror=(/^[0-9]{3}$/.test($scope.verifaction)?false:true);
	}

	

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
