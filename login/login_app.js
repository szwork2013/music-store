	var app=angular.module('myApp',[]);
	app.controller('ctrl',function($scope,$http){
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
			 var baseUrl="http://localhost/music-store/php/album_view.php/";
			  $http.post(baseUrl+'register', {'firstname': $scope.firstname, 'lastname': $scope.lastname, 'email': $scope.email,'password':$scope.password}).
			  then(function(response) {
				  console.log(response);
			  });
		}
		
		
		///////////////////////ONLY FOR TESTING////////////
	
		$scope.firstname="ariel";
		$scope.lastname="avrani";
		$scope.email="aw@a.com";
		$scope.password="123456";
		$scope.repassword="123456";
		
		////////////////////end of "ONLY FOR TESTING"  ////////////
	});