	var app=angular.module('myApp',[]);
	app.controller('ctrl',function($scope){
		$scope.flag=true;
		$scope.regist=false;
		
		$scope.login=function(){
				alert("login");
		}
		
		$scope.openregister=function(){
				$scope.regist=true;
		}
		
		$scope.closeregistration=function(){
				$scope.regist=false;
		}
		
		$scope.registration=function(){
				alert();
		}
		
		
	});