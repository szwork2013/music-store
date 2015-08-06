	var app=angular.module('myApp',[]);
	app.controller('ctrl',function($scope,$http){
		$scope.flag=true;
		$scope.regist=false;
		
		$scope.login=function(){
			
			 var baseUrl="../php/register_view.php/";
			  $http.post(baseUrl+'login', {'email': $scope.loginEmail,'password':$scope.loginPassword}).
			  success(function(response) {
				  console.log(response);
			  });
		}
		
		$scope.openregister=function(){
				$scope.regist=true;
		}
		
		$scope.closeregistration=function(){
				$scope.regist=false;
		}
		
		$scope.valdiateLengthPassword=function(){
			if($scope.password.length <6 &&  $scope.password.length>0){
				$scope.toSmall=true;
			}
			else{
				$scope.toSmall=false;
			}
			if($scope.password.length >8){
				$scope.toBig=true;
			}
			else{
				$scope.toBig=false;
			}
		}
		
		$scope.valdiateRePassword=function(){
			if ($scope.password!=$scope.repassword){
				$scope.notEqual=true;
			}
			else{
				$scope.notEqual=false;
			}
		}
		
		$scope.registration=function(){
			if($scope.notEqual==false && $scope.toBig==false && $scope.toSmall==false){
			 var baseUrl="../php/register_view.php/";
			  $http.post(baseUrl+'register', {'firstname': $scope.firstname, 'lastname': $scope.lastname, 'email': $scope.email,'password':$scope.password,'repassword':$scope.repassword}).
			  success(function(response) {
				  console.log(response);
			  });
			  $scope.regist=false;
			}
		}
		
	});