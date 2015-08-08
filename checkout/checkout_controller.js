

app.controller( 'checkOutController', function($scope,$route,$location,$routeParams) {

	$scope.func=function(){
		$scope.billing=false;
		
	}
	
	$scope.billing=true;
	$scope.payment=false;
	$scope.order=false;
	
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
		alert(paymentWay);
		$scope.order=true;
		$scope.payment=false;
		$scope.payment_right=true;
		$scope.x2="red";
		$scope.x3="black";
	
		$scope.the4last=$scope.card_number.slice(-4);
	}
	
	
}); 
