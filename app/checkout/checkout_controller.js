

app.controller( 'checkOutController', function($scope,$route,$location,$routeParams,productService,CheckoutFactory,$rootScope) {


	$scope.data={};

	$scope.getInputsData=function(){
		$scope.data={'address': $scope.address,
			'city':$scope.city,
			'zip':$scope.zip,
			'phone':$scope.telephone,
			'paymentWay':$scope.paymentWay,
			'name_on_card':$scope.name_on_card,
			'card_number':$scope.card_number,
			'verifaction':$scope.verifaction,
			'expiration':$scope.expiration,
			'totalPrice':$scope.totalPrice,
			'albumsId':$scope.albumsIdArr
		};
	}



	$scope.send=function(){
		$scope.albumsIdArr = new Array();
		for( var i=0 ; i<$scope.cart.length ; i++ ){
			$scope.albumsIdArr[i]=$scope.cart[i].album_id;
		}
		//$scope.albumsId = angular.toJson($scope.albumsIdArr);
		$scope.getInputsData();
		CheckoutFactory.send($scope.data).
              success(function (response) {
                    console.log(response);
		  });
	}
	
	
	//just for developing
	$scope.address="aaa 1";
	$scope.city='Jerusalem';
	$scope.zip='111';
	$scope.telephone='0546827883';
	$scope.name_on_card="ariel avrani";
	$scope.card_type="Visa";
	$scope.card_number="1111111111111111";
	$scope.expiration="02-2015";
	$scope.verifaction="111";
	
	
	
	/////////////////////////////////////////////////////////
	
	$scope.cart=productService.getData("MyCart");
	var temp=0;
	for(var i=0 ; i<$scope.cart.length ; i++ ){
		
		temp+=$scope.cart[i].album_price*$scope.cart[i].qty;
	}
	$scope.totalPrice=temp;
	
	///////////////////////////////////////////////////
	
	
	$scope.func=function(){
		$scope.billing=false;
		
	}
	
	$scope.changeBillingInfo=function(){
		$scope.billing=true;
		$scope.payment=false;
		$scope.order=false;
		$scope.x1="black";
		$scope.x2="red";
		$scope.x3="red";
	}
	
	$scope.changePayment=function(){
		if($scope.x3=="black" ||$scope.x2=="black" ){
		$scope.billing=false;
		$scope.payment=true;
		$scope.order=false;
		$scope.x1="red";
		$scope.x2="black";
		$scope.x3="red";
		}
	}

	$scope.billing=false;
	$scope.payment=false;
	$scope.order=true;
	
	$scope.x1="black";
	$scope.x2="red";
	$scope.x3="red";

	$scope.billingFunc=function(){
		$scope.billing=false;
		$scope.payment=true;
		$scope.billing_right=true;
		$scope.x1="red";
		$scope.x2="black";
	}
	
	$scope.paymentFunc=function(paymentWay){
		$scope.paymentWay=paymentWay;
		$scope.order=true;
		$scope.payment=false;
		$scope.payment_right=true;
		$scope.x2="red";
		$scope.x3="black";
		$scope.the4last=$scope.card_number.slice(-4);
	}
	
	$scope.valdiateAdress=function(){
		$scope.addresserror= (/[a-zA-Z]{3,}\s[0-9]{1,}/.test($scope.address)?false:true);
		 
	}
	
	$scope.valdiateCity=function(){
		$scope.cityerror=  (/[a-zA-Z]{3,}/.test($scope.city)?false:true);
		 
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
	
	$scope.validateDate=function(){
		$scope.dateerror=(/^([0-9]{2})-([0-9]{4})$/.test($scope.expiration)?false:true);
	}
	
	
	
}); 
