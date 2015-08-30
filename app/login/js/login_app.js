	var app=angular.module('myApp',['facebook']);

	app.config(function(FacebookProvider) {
		FacebookProvider.init('1415931842065697');
	});

	app.controller('ctrl',function($scope,$http,$window,$location,LoginFactory,Facebook,$timeout,$rootScope){
		

		$scope.form=true;
		$scope.flag=true;


		/** valdiatePassword
		 *  Valdiate if the password is in the right format
		 *
		 *  @param void
		 *  @return void
		 *
		 */
		$scope.valdiatePassword=function(){
			if($scope.password!=null){
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
			
			$scope.isOneCapital= (/[A-Z]/.test($scope.password)?false:true);
		}


		/** valdiateRePassword
		 *  Valdiate if the re-password is in the right format
		 *
		 *  @param void
		 *  @return void
		 *
		 */
		$scope.valdiateRePassword=function(){
			if ($scope.password!=$scope.repassword){
				$scope.notEqual=true;
			}
			else{
				$scope.notEqual=false;
			}
		}


		/** valdiateFirstName
		 *  Valdiate if the first name is in the right format
		 *
		 *  @param void
		 *  @return void
		 *
		 */
		$scope.valdiateFirstName=function(){
			$scope.lengthFirstName = ($scope.firstname.length>=2 && $scope.firstname.length <=12 ? false : true);
		}

		/** valdiateFirstName
		 *  Valdiate if the last name is in the right format
		 *
		 *  @param void
		 *  @return void
		 *
		 */
		$scope.valdiateLastName=function(){
			$scope.lengthLastName = ($scope.lastname.length>=2 && $scope.lastname.length <=12 ? false : true);
		}



		/** login
		 *  Login using email and password;
		 *
		 *  @param void
		 *  @return void
		 *
		 */
		$scope.login=function(){
			var loginInfo={'email': $scope.loginEmail,
				          'password':$scope.loginPassword};
			LoginFactory.login(loginInfo)
				.success(function(response) {
					$window.location.reload();
				});
		}



		/** gerUserInfo
		 *  Get the user input value information
		 *
		 *  @param void
		 *  @return create $scope.userInfo object
		 *
		 */
		$scope.gerUserInfo=function(){
			$scope.userInfo={'firstname': $scope.firstname,
				'lastname': $scope.lastname,
				'email': $scope.email,
				'password':$scope.password,
				'repassword':$scope.repassword
			};
		}


		/** registration
		 *  Registrat ajax , hhtp query for saving new user
		 *
		 *  @param void
		 *  @return void
		 *
		 */
		$scope.registration=function(){
			$scope.img=true;
			$scope.gerUserInfo();
			LoginFactory.registration($scope.userInfo).
			  success(function(response) {
					$scope.registrationPageChanging(response);
			  });
		}




		/** registrationPageChanging
		 *  Create dynamic changes for registration option
		 *
		 *  @param void
		 *  @return void
		 *
		 */
		$scope.registrationPageChanging=function(response){
			$scope.regSecond=true;
			$scope.img=true;
			$timeout(function() {
				$scope.form=false;
				$scope.img=false;
				$scope.regThird=true;
				$scope.regSecond=false;
			},3000),
				$timeout(function() {
					$scope.msg='Registration succeed!';

				},4000);
			$timeout(function() {
				$scope.regThird=false;
				$scope.regist=false;
				var element = document.getElementById("loginpsw");
				element.focus();
				$scope.loginEmail=$scope.email;
				$scope.regFirst=true;
				$scope.regThird=false;
				$scope.msg='';
				$scope.form=true;
			},7000);
		}


		////////////////////////////////// Login with Facebook //////////////////////////

		$scope.fbInfo={};

		/** FBlogin
		 *  Login using facebook login option
		 *
		 *  @param  Ff the user is login get the user information from facebook.
		 *  @return void
		 *
		 */
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
			},{scope:'email'});
		}


		/** getFbInfo
		 *  Login using facebook login option
		 *
		 *  @param   Get the user information from facebook.
		 *  @return void
		 *
		 */
		$scope.getFbInfo = function() {
			Facebook.api('/me', function(info) {
				$scope.fbInfo=info;
				$scope.fbSend();
			});
		};


		/** fbSend
		 *  Ajax for saving to data base the facebook user information
		 *
		 *  @param   void
		 *  @return void
		 *
		 */
		$scope.fbSend=function(){
			var userFBInfo= {
				'firstname': $scope.fbInfo.first_name,
				'lastname': $scope.fbInfo.last_name,
				'email': $scope.fbInfo.email,
				'fbId':$scope.fbInfo.id,
				'accessToken':$scope.accessToken
			};
			LoginFactory.fbLogin(userFBInfo)
				.success(function(response) {
					$window.location.reload();
				});
		}


		/** closeIt
		 *  Hide the registion form using the Esc keyboard button
		 *
		 *  @param object  - the click keyboard event
		 *  @return void
		 *
		 */
		$scope.closeIt=function(evt){
			if (evt.keyCode == 27) {
				$scope.regist=false;
			}
		}


		/** search
		 *  ajax, http query.Searching a song name in data base
		 *
		 *  @param sting  - the word the user is looking for
		 *  @return void - if the qury success return the seaching results
		 *
		 */
		$scope.search=function(word){
			$scope.hideSearch=false;
			if(word.length > 2 ) {
				LoginFactory.search(word).
					success(function (response) {
						if (response) {
							console.log(response)
							$scope.resuls = response;
						}
					});
			}
		}

		/** showAlbum
		 *  http query for an album id by a song in that album, path this id to product page
		 *
		 *  @param void
		 *  @return change path to the product page and send it the a prodect id
		 *
		 */
		$scope.showAlbum=function(song){
			LoginFactory.showAlbum(song).
				success(function(response) {
					console.log(response);
					$window.location.href='../../index.html#/product/'+response;
					$scope.word=song;
				});
		}


		/** goHome
		 *  path to the home page
		 *
		 *  @param void
		 *  @return voide
		 *
		 */
		$scope.goHome=function(){
			$window.location.href='../../index.html';
		}



	});//close ctrl