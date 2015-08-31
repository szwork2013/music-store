
<div id='checkout_container'>

	<div id='checkout_container_right'>
		<p id='checkout_container_right_title'>Your CheckOut Progress</p>
		<p class='checkout_container_right_p'>Billing Information | <span class='change' ng-click='changeBillingInfo()'> change</span></p>
			<div ng-show='billing_right' class='billing_right'>
				<p  ng-bind=''></p>
				<p  ng-bind='address'></p>
				<p  ng-bind='city'></p>
				<p  ng-bind='telephone'></p>
			</div>
		<p class='checkout_container_right_p'>Payment Method | <span class='change' ng-click='changePayment()'> change</span></p>
			<div   ng-show='payment_right' class='payment_right'>
				<p >Credit Card (saved)</p>
				<p >Credit Card type:</p>
				<p class='gray' ng-bind='card_type' ></p>
				<p >Credit Card Number:</p>
				<p class='gray'>****<span ng-bind='the4last'></span></p>
				<p >Name On The Card:</p>
				<p class='gray' ng-bind='name_on_card'></p>
			
			</div>
	</div>
	
	
	
	<div id='checkout_container_left'>
		<ul id='checkout-ul'>
		
			<li ng-class="x1">1-Billing Informaitionv </li>
				
				<div id='checkout-billing' ng-show='billing' >
					<form name='billingForm'   novalidate >
						<p>Address<span style='color:red'>*</span></p>
						
						<input type='text' id='checkout-address' name='address' ng-model= 'address' required ng-keyup="valdiateAdress()"
						ng-class="{ 'error':  billingForm.address.$error.required || addresserror}">
						
						<p class='feedback' style='font-size:8px' ng-show="billingForm.address.$error.required " >This is a required field.</p>
						<p class='feedback' style='font-size:8px' ng-show="addresserror" >Has to contain street name and house number.</p>
						
						
						<p>City<span style='color:red'>*</span><span style='margin-left:250px'>Zip/Postal Code</span><span style='color:red'>*</span></p>
						
						
						<input type='text' id='checkout-city' name='city' ng-model= 'city' required ng-keyup="valdiateCity()"
						ng-class="{ 'error':  billingForm.city.$error.required || cityerror}">
						
						
						<input type='text' id='checkout-zip' name='zip' ng-model= 'zip' required
						ng-class="{ 'error':  billingForm.zip.$error.required || ziperror }" ng-keyup='valdiateZipCode()'>
						
						<p class='feedback' style='font-size:8px' ng-show="billingForm.zip.$error.required " id='checkout-zip-feedback' >This is a required field.</p>
						<p class='feedback' style='font-size:8px;margin-left:287px' ng-show="ziperror " >Has to be only digits,from 1 to 7.</p>
					
						<p class='feedback' style='font-size:8px' ng-show="billingForm.city.$error.required " >This is a required field.</p>
						<p class='feedback' style='font-size:8px' ng-show="cityerror" >Use only English and minimum 3 notes.</p>
						
						<p>Telephone<span style='color:red'>*</span></p>
						
						<input type='text' id='checkout-telephone' name='telephone'  ng-model='telephone' required ng-keyup="valdiatePhone()"
						ng-class="{ 'error': billingForm.telephone.$error.required || phoneerror }">
						
						<p class='feedback' style='font-size:8px' ng-show="billingForm.telephone.$error.required " >This is a required field.</p>
						<p class='feedback' style='font-size:8px' ng-show="phoneerror" >Not a valid phone number.</p>
						
						<p style='color:red'>Requierd Fields*</p>
						
						<button class='checkout-continue' ng-click='billingFunc()'
						ng-disabled='billingForm.address.$error.required || billingForm.zip.$error.required  || 
						billingForm.city.$error.required || billingForm.telephone.$error.required     
						|| addresserror || cityerror || phoneerror
						
						
						'>Continue</button>
					</form>
						
				</div>
				
			
			
			<li ng-class="x2" >2-Payment Informaition</li>
				
				<div id='checkout-order' ng-show='payment' novalidate">
					
					<input type='radio' name='payment' value='check' ng-model="content" ng-checked='true'><label>Check/Money Order</label>
					<br>
					<input type='radio'  name='payment' value='credit_card' ng-model="content"><label>Credit Card(saved)</label>
					<button class='checkout-continue' ng-click='paymentFunc("check")' ng-hide="content == 'credit_card'" style='margin-top:235px'>Continue</button>
					
					
					
					<form ng-show="content == 'credit_card'" name='paymentForm'>
						<p>Name on Card<span style='color:red'> *</span></p>
						<input type='text' name='name_on_card' ng-model='name_on_card' required ng-keyup="valdiateName()"
						ng-class="{ 'error':  paymentForm.name_on_card.$error.required || nameerror }">
						
						<span ng-show='paymentForm.name_on_card.$error.required' class='feedback'>This field is required.</span>
						<span ng-show='nameerror' class='feedback'>Must contain first and last name.</span>
						
						
						<p>Credit Card Type<span style='color:red'> *</span></p>
						<select id='checkout_card' name='card_type' ng-model='card_type'  required
						ng-class="{ 'error':  paymentForm.card_type.$error.required}">
						
							<option value="" disabled selected>Chose credit company</option>
							<option>Visa</option>
							<option>Master Card</option>
						</select>
						<span ng-show='paymentForm.card_type.$error.required' class='feedback'>This field is required.</span>
						
						<p>Credit Card Number<span style='color:red'> *</span></p>
						<input type='text' name='card_number' ng-model='card_number'  required  ng-keyup="validateCardNumber()"
						ng-class="{ 'error': paymentForm.card_number.$error.required || carderror }">
						
						<span ng-show='paymentForm.card_number.$error.required' class='feedback'>This field is required.</span>
						<span ng-show='carderror' class='feedback'>Must contain 16 digit.</span><br>
						
						<p>Expiration Date<span style='color:red'> *</span></p>
						<input type='text' name='expiration' ng-model='expiration' required  ng-keyup="validateDate()"
						ng-class="{ 'error': paymentForm.expiration.$error.required || dateerror }">
						
						<span ng-show='paymentForm.expiration.$error.required' class='feedback'>This field is required.</span>
						<span ng-show='dateerror' class='feedback'>Use this format MM-YYYY.</span><br>
						
						<p>Card Verifaction<span style='color:red'> *</span></p>
						<input type='text' name='verifaction' ng-model='verifaction' id='checkout_verifaction' required ng-keyup="validateVerifaction()"
						ng-class="{ 'error': paymentForm.verifaction.$error.required || verifactionerror }">
						
						<span style='font-size:12px;cursor:help' ng-mouseover='x=true'> What is this?</span>
						<span ng-show='paymentForm.verifaction.$error.required' class='feedback'>This field is required.</span>
						<span ng-show='verifactionerror' class='feedback'>Has to be 3 digit.</span>
						
						<img ng-show='x' src='icons/digit.jpg' id='checkout_digit'>
						
						<button class='checkout-continue' ng-click='paymentFunc("credit")'
					ng-disabled='paymentForm.name_on_card.$error.required ||
								paymentForm.card_number.$error.required ||
								paymentForm.expiration.$error.required ||
								paymentForm.verifaction.$error.required ||
								nameerror || carderror || verifactionerror||dateerror
								||paymentForm.card_type.$error.required
					'>Continue</button>
						
					</form>
					
					
				</div>
			
				
			
			
			<li ng-class="x3">3-Order Review</li>
			
				<div id='order' ng-show='order' style='overflow:scroll'>
					<table border='1'>
					<tr>
						<th style='width:400px;text-align:left;padding-left:20px'>Product Name</th><th>Price</th><th>Qty<th>Subtotal</th>
					</tr>
					<tr ng-repeat='i in cart' >
						 <td style='text-align:left;padding-left:20px'>{{i.album_artist}}-{{i.album_name}} </td>
						 <td>{{i.album_price | currency}}</td>
						 <td>{{i.qty}}</td>
						 <td>{{i.qty*i.album_price | currency}}</td>
					</tr>
					<tr>
					<td colspan="3" style='text-align:right;color:black;font-weight:bold;padding-right:30px'>Total</td>
					<td style='color:black;font-weight:bold'>{{totalPrice | currency}}</td>
					</tr>
					</table>
					
					
					<button class='checkout-continue' style='margin-top:30px' ng-click='send()'  >Place Order</button>
					
					
					<p  style='position:relative;top:65px;font-size:12px;cursor:pointer' ng-click='editCart()'><span style='color:gray;font-size:10px'>Forgot an item? </span> Edit Your Cart</p>
				</div>
		</ul>
	</div>
	
	
</div>