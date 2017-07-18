class Checkout {
	get checkoutTypeForm() { return $('#login-form'); }
	get checkoutAsGuestRadioBtn() { return $('//*[@id="login:guest"]'); }
	get checkoutAsGuestLabel() { return $('#checkout-step-login > div > div.col-2 > ul > li:nth-child(1) > label'); }
	get registerRadioBtn() { return $('//*[@id="login:register"]'); }
	get registerLabel() { return $('#checkout-step-login > div > div.col-2 > ul > li:nth-child(2) > label'); } 
	get continueBtn() { return $('#onepage-guest-register-button'); }
	get loginForm() { return $('#login-form'); }
	get email() { return $('#login-email'); }
	get pw() { return $('#login-password'); }
	get loginButton() { return $('#login-form > fieldset > ul > li.buttons-set > button'); }
	get billingAddressForm() { return $('#co-billing-form'); }
	get billingFName() { return $('//*[@id="billing:firstname"]'); }
	get billingLName() { return $('//*[@id="billing:lastname"]'); }
	get billingEmail() { return $('//*[@id="billing:email"]'); }
	get billingAddress() { return $('//*[@id="billing:street1"]'); }
	get billingCity() { return $('//*[@id="billing:city"]'); }
	get billingState() { return $('//*[@id="billing:region_id"]'); }
	get billingZip() { return $('//*[@id="billing:postcode"]'); }
	get billingTelephone() { return $('//*[@id="billing:telephone"]'); }
	get billingPw() { return $('//*[@id="billing:customer_password"]'); }
	get billingConfirmPw() { return $('//*[@id="billing:confirm_password"]'); }
	get billingContinueBtn() { return $('#billing-buttons-container > button.button.continue'); }
	get shipToThisAddresslabel() { return $('#co-billing-form > fieldset > ul > div > li:nth-child(1) > label'); }
	get shippingAddressForm() { return $('#co-shipping-form'); }
	get shippingMethodForm() { return $('#co-shipping-method-form'); }
	get groundShippingLabel() { return $('#checkout-shipping-method-load > dl > dd:nth-child(2) > ul > li > label'); }
	get groundShippingRadioBtn() {return $('#s_method_flatrate_flatrate'); }
	get shippingMethodContinueBtn() { return $('#shipping-method-buttons-container > button.button.continue'); }
	get paymentMethodForm() { return $('#co-payment-form'); }
	get moneyOrderRadioBtn() { return $('#p_method_checkmo'); }
	get moneyOrderLabel() { return $('#checkout-payment-method-load > dt:nth-child(8) > label'); }
	get ccLabel() { return $('#checkout-payment-method-load > dt > label'); }
	get ccType() { return $('#gateway_cc_type'); }
	get ccNum() { return $('#gateway_cc_number'); }
	get ccExpMon() { return $('#gateway_expiration'); }
	get ccExpYr() { return $('#gateway_expiration_yr'); }
	get ccVerifyNum() { return $('#gateway_cc_cid'); }
	get orderReview() { return $('#checkout-step-review'); }
	get termsLabel() { return $('#checkout-agreements > ol > li > p > label'); }
	get placeOrderButton() { return $('#review-buttons-container > button.button.continue'); }

	//order success page elements
	get orderSuccessPageHeading() { return $('body > div.wrapper > div > div.main.col1-layout > div > div.page-title > h1'); }
	get orderNumText() { return $('body > div.wrapper > div > div.main.col1-layout > div > p:nth-child(8)'); }

	//wholesale checkout
	get wholesaleBillingAddressForm() { return $('#co-billing-form'); }
	get wholesaleBillingAddressContinueBtn() { return $('#billing-buttons-container > button'); }
	get wholesaleShippingAddressContinueBtn() { return $('#shipping-buttons-container > button.button.continue'); }
	get wholesaleShipingMethodForm() { return $('#co-shipping-method-form'); }
	get wholesaleShippingMethodContinueBtn() { return $('#shipping-method-buttons-container > button.button.continue'); }

	//logged in customer 
	submitBillingForm(fn, ln, em, add, city, st, zip, phone, type, pw) {
		this.billingFName.setValue(fn);
		this.billingLName.setValue(ln);
		this.billingEmail.setValue(em);
		this.billingAddress.setValue(add);
		this.billingCity.setValue(city);
		this.billingState.selectByVisibleText(st);
		this.billingZip.setValue(zip);
		this.billingTelephone.setValue(phone);

		if (type && pw) {
			this.billingPw.setValue(pw);
			this.billingConfirmPw.setValue(pw);
		}

		this.billingAddressForm.submitForm();
	}

	submitShippingMethodForm() {
		this.shippingMethodForm.submitForm();
	}

	submitPaymentMethodForm() {
		this.paymentMethodForm.submitForm();
	}

	fillCCForm(type, num, expmon, expyr, ccv) {
		this.ccType.selectByVisibleText(type);
		this.ccNum.setValue(num);
		this.ccExpMon.selectByVisibleText(expmon);
		this.ccExpYr.selectByVisibleText(expyr);	
		this.ccVerifyNum.setValue(ccv);	
	}

	loginAtCheckout(un, pw) {
		this.email.setValue(un);
		this.pw.setValue(pw);

		this.checkoutTypeForm.submitForm();
	}

}

module.exports = new Checkout();