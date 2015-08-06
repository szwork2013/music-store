

app.controller( 'checkOutController', function($scope,$route,$location,$routeParams) {

	$scope.billing=true;
	$scope.payment=false;
	$scope.order=false;
	

		
	$scope.billingFunc=function(){
		$scope.billing=false;
		$scope.payment=true;
	}

	
	
	
}); 
