<?php
include_once(dirname(__FILE__) . '/../../view_controller.php');
session_start();
$login = new viewController();
$login->checkLogin();;
?>

<!DOCTYPE html>
<html>

<head>
	<title>Music Store - Login</title>
	<link rel="shortcut icon" href="../../icons/Music-icon.png" />
	<link rel="stylesheet" href="css/login_style.css">
	<script src='../../lib/angularJs/angular.js'></script>
	<script src="src/angular-facebook/angular-facebook.js"></script>
	<script src="js/login_app.js"></script>
	<script src="js/login_factory.js"></script>
</head>
<body ng-app='myApp' ng-controller='ctrl' >


	<header>
		<label>MUSIC</label>
		<input type="text" placeholder="Search"/>
	</header>

	<nav>
		<ul>
			<li><a href="../../index.html">Home</a></li>
			<li><a>My Wishlist</a></li>
			<li><a href="../#checkout">Checkout</a></li>
			<li><a href="login.php">Login</a></li>
		</ul>
	</nav>



	<div id='container' ng-keydown="closeIt($event)">
		<div class='header'>
			<p>Login or Create an Account</p>
		</div>
		<div id='left'>
			<p class='title'>NEW CUSTOMERS</p>
			<hr>
			<p class='gray'>By creating an account with our store,you will be able</p>
			<p class='gray'>to move through the checkout process faster,store multiple </p>
			<p class='gray'>shipping addresses,view and track your orders in your account and more.</p>
			<br>
			<button ng-click='regist=true'>Create An Account</button>
			<img id="fb" src="icons/fb.png" ng-click="FBlogin()">
		</div>
		
		<div id='right'>
			<p class='title'>REGISTERED CUSTOMERS</p>
			<hr width="460">
			<p class='gray'>If you have an account with us,please log in. </p>

			<form name="loginForm"   ng-show="flag" class="sample"  action=""  novalidate >
				<div>
					<p class='form-title'>Email Address<span style='color:red'> *</span></p>
					<input type='email' name="loginEmail" ng-model="loginEmail" ng-class="{ 'notvalid': loginForm.loginEmail.$error.required && loginForm.loginEmail.$dirty}" required>
					<span class='feedback' ng-show="loginForm.loginEmail.$error.required && loginForm.loginEmail.$dirty">Email is required.</span>
					<span  class='feedback' ng-show="loginForm.loginEmail.$error.email  && loginForm.loginEmail.$dirty">Invalid email address.</span>
				</div>
				<div>
					<p class='form-title'>Password<span style='color:red'> *</span></p>
					<input type='password' name="loginPassword" ng-model="loginPassword" ng-class="{ 'notvalid':loginForm.loginPassword.$error.required && loginForm.loginPassword.$dirty}" required>
					<span class='feedback' ng-show="loginForm.loginPassword.$error.required && loginForm.loginPassword.$dirty">Password is required.</span>
				</div>

				<button  ng-disabled="loginForm.loginPassword.$dirty && loginForm.loginPassword.$invalid ||  
				loginForm.loginEmail.$dirty && loginForm.loginEmail.$invalid || loginForm.loginPassword.$pristine 
				|| loginForm.loginEmail.$pristine" class='submit' ng-click="login()" >Login</button> 
			</form>
			<p id='note'>*Required fields</p>
		</div>
		
		
		<div id='register' ng-show='regist' ng-init="regist=false">
			<div ng-click='regist=false'  id='close-registration'>X</div>
			<p style='text-align:center;color:gray;clear:both'>Resitration</p>
			


			<form name="formRegistration"  novalidate >
				<p class='register-title'>Profile Information</p>

				<div class="group">
					<input type='text'   placeholder='First Name' name='firstname' class='input-registration' ng-model='firstname' required  ng-keyup="valdiateFirstName()"
					 ng-class="{ 'error': lengthFirstName || formRegistration.firstname.$error.required}">
					 
					<span class='feedback' ng-show="formRegistration.firstname.$error.required " >First name is required.</span>
					<span class='feedback' ng-show="lengthFirstName">Has to be greater than 2 and smaller then 12.</span>
				</div>

				<div class="group">
					<input type='text' placeholder='Last Name' name='lastname' class='input-registration' ng-model='lastname' required ng-keyup="valdiateLastName()"
					 ng-class="{ 'error': lengthLastName || formRegistration.lastname.$error.required}">
					 
					<span class='feedback' ng-show="formRegistration.lastname.$error.required ">Last name is required.</span>
					<span class='feedback' ng-show="lengthLastName">Has to be greater than 2 and smaller then 12.</span>
				</div>

				<div class="group">
					<p class='register-title'>Login Data</p>
					<input type='email' placeholder='E-mail address' name='email' class='input-registration' ng-model='email' required
					 ng-class="{ 'error': formRegistration.email.$error.required|| formRegistration.email.$error.email}">
					 
					<span class='feedback' ng-show="formRegistration.email.$error.required ">Email is required.</span>
					<span class='feedback' ng-show="formRegistration.email.$error.email">Email is not valid.</span>
				</div>

				<div class="group">
					<input type='password' placeholder='Password'  name='password' class='input-registration' ng-model='password' required ng-keyup="valdiatePassword()" 
					 ng-class="{ 'error': formRegistration.password.$error.required||toSmall || toBig || isOneCapital }">
					
					<span class='feedback' ng-show="formRegistration.password.$error.required ">Password is required.</span><br>
					<span class='feedback' ng-show="toSmall" >Password has to be bigger than 5.</span>
					<span class='feedback' ng-show="toBig" >Password has to be smaller than 9.</span><br>
					<span class='feedback' ng-show="isOneCapital" >Password has to contain one capital letter.</span>
				</div>

				<div class="group">
					<input type='password' placeholder='Password confirmation' name='repassword'  class='input-registration' ng-model='repassword' required  ng-keyup="valdiateRePassword()"
					 ng-class="{ 'error': formRegistration.repassword.$error.required || notEqual }">
					 
					<span class='feedback' ng-show="formRegistration.repassword.$error.required ">Confirmation is required.</span>
					<span class='feedback' ng-show="notEqual">password and repassword not equal.</span>
				</div>

				<div class="group">
					<button id='submitregister' ng-click='registration()' ng-disabled="formRegistration.firstname.$error.required ||
					formRegistration.lastname.$error.required  || formRegistration.email.$error.required || formRegistration.email.$error.email
					|| formRegistration.password.$error.required || formRegistration.repassword.$error.required || toSmall || toBig || notEqual  || isOneCapital ||  lengthLastName || lengthFirstName "
					>Register</button>
				</div>
			</form>
		</div>
		
	</div>
	<div class='footer'></div>
	
</body>
</html>