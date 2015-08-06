

app.controller( 'checkOutController', function($scope,$route,$location,$routeParams) {

	$scope.billing=true;
	$scope.payment=false;
	$scope.order=false;
	
	$scope.x1="black";
	$scope.x2="red";
	$scope.x3="red";

		
	$scope.billingFunc=function(){
		$scope.billing=false;
		$scope.payment=true;
		$scope.x1="red";
		$scope.x2="black";
	}
	
	$scope.paymentFunc=function(){
		$scope.order=true;
		$scope.payment=false;
		$scope.x2="red";
		$scope.x3="black";
	}
	
	
}); 
