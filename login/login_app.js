	var app=angular.module('myApp',['facebook']);

	app.config(function(FacebookProvider) {
		FacebookProvider.init('1415931842065697');
	});

	app.controller('ctrl',function($scope,$http,LoginFactory,Facebook){
		$scope.flag=true;
		$scope.regist=false;

		
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


		$scope.login=function(){
			var loginInfo={'email': $scope.loginEmail,
				          'password':$scope.loginPassword};
			LoginFactory.login(loginInfo)
				.success(function(response) {
					console.log(response);
				});
		}


		$scope.registration=function(){
			  var userInfo={'firstname': $scope.firstname,
				  			'lastname': $scope.lastname,
				  			'email': $scope.email,
				  			'password':$scope.password,
				  			'repassword':$scope.repassword};
			LoginFactory.registration(userInfo)
			  success(function(response) {
				  console.log(response);
			  });
			  $scope.regist=false;
			}



			////////////////////////////////// Login with Facebook //////////////////////////


		$scope.fbInfo={};

		$scope.FBlogin = function() {
			Facebook.login(function(response) {
				if(response.status === 'connected') {
					$scope.accessToken=response.authResponse.accessToken;
					console.log("You are connected with Facebook")
					$scope.getFbInfo();
				}
				else {
					console.log("You are not connected to Facebook")
				}
			});
		}

		$scope.getFbInfo = function() {
			Facebook.api('/me', function(info) {
				$scope.fbInfo=info;
				$scope.fbLogin();
			});
		};

		$scope.fbLogin=function(){
			var userFBInfo= {
				'firstname': $scope.fbInfo.first_name,
				'lastname': $scope.fbInfo.last_name,
				'email': $scope.fbInfo.email,
				'fbId':$scope.fbInfo.id,
				'accessToken':$scope.accessToken
			};


			LoginFactory.fbLogin(userFBInfo)
				.success(function(response) {
					console.log(response);
				});
		}







	});//close ctrl