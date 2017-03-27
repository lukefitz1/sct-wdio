describe("Open product page", function () {
    //set custom timeout for these tests, since they have multiple steps
    this.timeout(25000)

    it("should complete guest checkout on B2C site", function () {
        browser.url("/teeny-weeny-doggie-bag-lunch-box");

        //Ensure add to cart button is visible, mini cart is not visible
        expect(prod.addToCart.isVisible()).to.be.true;
        expect(header.miniCartDropdown.isVisible()).to.be.false;
        
        //add simple product to cart
        prod.addToCart.click();
        
        //wait for mini cart to display, go to checkout
        header.miniCartDropdown.waitForVisible();
        header.miniCartCheckoutBtn.click();

        //select checkout as guest
        checkout.checkoutTypeForm.waitForVisible();
        checkout.checkoutAsGuestLabel.click();
        checkout.continueBtn.click();

        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.submitBillingForm('Luke', 'Fitzgerald', 'luke.fitzgerald-test1@blueacorn.com', 
            '145 Williman St', 'Charleston', 'South Carolina', '29403', '8779442583', 
            'guest');
        
        //select shipping method, submit form
        checkout.shippingMethodForm.waitForVisible();
        checkout.groundShippingLabel.click();
        checkout.submitShippingMethodForm();

        //select payment method
        checkout.paymentMethodForm.waitForVisible();
        checkout.moneyOrderRadioBtn.click();
        checkout.submitPaymentMethodForm();

        //place order
        checkout.orderReview.waitForVisible();
        checkout.placeOrderButton.waitForVisible();
        checkout.termsLabel.click();
        checkout.placeOrderButton.click();

        //order success page
        checkout.orderSuccessPageHeading.waitForVisible();
        console.log(checkout.orderNumText.getText());
    });

    it("should complete register on checkout on B2C site", function () {
        browser.url("/teeny-weeny-doggie-bag-lunch-box");

        //Ensure add to cart button is visible, mini cart is not visible
        expect(prod.addToCart.isVisible()).to.be.true;
        expect(header.miniCartDropdown.isVisible()).to.be.false;
        
        //add simple product to cart
        prod.addToCart.click();
        
        //wait for mini cart to display, go to checkout
        header.miniCartDropdown.waitForVisible();
        header.miniCartCheckoutBtn.click();

        //select register on checkout
        checkout.checkoutTypeForm.waitForVisible();
        checkout.registerLabel.click();
        checkout.continueBtn.click();

        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.submitBillingForm('Luke', 'Fitzgerald', 'luke.fitzgerald-test2@blueacorn.com', 
            '145 Williman St', 'Charleston', 'South Carolina', '29403', '8779442583', 
            'guest', 'pass4luke');
        
        //select shipping method, submit form
        checkout.shippingMethodForm.waitForVisible();
        checkout.groundShippingLabel.click();
        checkout.submitShippingMethodForm();

        //select payment method
        checkout.paymentMethodForm.waitForVisible();
        checkout.moneyOrderRadioBtn.click();
        checkout.submitPaymentMethodForm();

        //place order
        checkout.orderReview.waitForVisible();
        checkout.placeOrderButton.waitForVisible();
        checkout.termsLabel.click();
        checkout.placeOrderButton.click();

        //order success page
        checkout.orderSuccessPageHeading.waitForVisible();
        console.log(checkout.orderNumText.getText());
    });

    it("should login at checkout and complete checkout on B2C site", function () {   
        browser.url("/teeny-weeny-doggie-bag-lunch-box");

        //Ensure add to cart button is visible, mini cart is not visible
        expect(prod.addToCart.isVisible()).to.be.true;
        expect(header.miniCartDropdown.isVisible()).to.be.false;
        
        //add simple product to cart
        prod.addToCart.click();
        
        //wait for mini cart to display, go to checkout
        header.miniCartDropdown.waitForVisible();
        header.miniCartCheckoutBtn.click();

        //login on checkout
        checkout.checkoutTypeForm.waitForVisible();
        checkout.loginAtCheckout();

        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.billingContinueBtn.click();

        //select shipping method, submit form
        checkout.shippingMethodForm.waitForVisible();
        checkout.groundShippingLabel.click();
        checkout.submitShippingMethodForm();

        //select payment method
        checkout.paymentMethodForm.waitForVisible();
        checkout.moneyOrderRadioBtn.click();
        checkout.submitPaymentMethodForm();

        //place order
        checkout.orderReview.waitForVisible();
        checkout.placeOrderButton.waitForVisible();
        checkout.termsLabel.click();
        checkout.placeOrderButton.click();

        //order success page
        checkout.orderSuccessPageHeading.waitForVisible();
        console.log(checkout.orderNumText.getText());
    });

    it("should perform customer login, add product to cart, then complete checkout", function () {   
        browser.url("/customer/account/login");

        //assert that the login form is displayed on page load
        expect(account.loginForm.isVisible()).to.be.true;
        expect(account.loginBtn.isVisible()).to.be.true;

        //login
        account.login('luke.fitzgerald@blueacorn.com', 'pass4luke');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;

        //go to product page
        browser.url("/teeny-weeny-doggie-bag-lunch-box");

        //Ensure add to cart button is visible, mini cart is not visible
        expect(prod.addToCart.isVisible()).to.be.true;
        expect(header.miniCartDropdown.isVisible()).to.be.false;
        
        //add simple product to cart
        prod.addToCart.click();
        
        //wait for mini cart to display, go to checkout
        header.miniCartDropdown.waitForVisible();
        header.miniCartCheckoutBtn.click();

        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.billingContinueBtn.click();

        //select shipping method, submit form
        checkout.shippingMethodForm.waitForVisible();
        checkout.groundShippingLabel.click();
        checkout.submitShippingMethodForm();

        //select payment method
        checkout.paymentMethodForm.waitForVisible();
        checkout.moneyOrderRadioBtn.click();
        checkout.submitPaymentMethodForm();

        //place order
        checkout.orderReview.waitForVisible();
        checkout.placeOrderButton.waitForVisible();
        checkout.termsLabel.click();
        checkout.placeOrderButton.click();

        //order success page
        checkout.orderSuccessPageHeading.waitForVisible();
        console.log(checkout.orderNumText.getText());
    });      

    it("should complete checkout on B2B site", function() {
        browser.url(wholesaleUrl + "/customer/account/login");

        //assert that the login form is displayed on page load
        expect(account.loginForm.isVisible()).to.be.true;
        expect(account.loginBtn.isVisible()).to.be.true;

        //login
        account.wholesaleLogin('luke.fitzgerald-dealer@blueacorn.com', 'pass4luke');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;
        
        //go to product page
        browser.url(wholesaleUrl + "doggie-bag-grouped-1?pattern=1022");

        //Ensure add to cart button is visible, mini cart is not visible
        expect(prod.addToCart.isVisible()).to.be.true;
        expect(header.miniCartDropdown.isVisible()).to.be.false;

        //on the wholesale site, you need to set the Qty of a product first, and it needs to be at least 3
        //add products to cart
        prod.firstPatternQtyInput.setValue(3);
        prod.addToCart.click();

        //wait for mini cart to display, go to checkout
        header.miniCartDropdown.waitForVisible();
        header.miniCartCheckoutBtn.click();

        //submit billing address form
        checkout.wholesaleBillingAddressForm.waitForVisible();
        checkout.wholesaleBillingAddressContinueBtn.click();

        //submit shipping method form
        checkout.wholesaleShipingMethodForm.waitForVisible();
        checkout.wholesaleShippingMethodContinueBtn.click();

        //select payment method
        checkout.paymentMethodForm.waitForVisible();
        checkout.moneyOrderRadioBtn.click();
        checkout.submitPaymentMethodForm();

        //place order
        checkout.orderReview.waitForVisible();
        checkout.placeOrderButton.waitForVisible();
        checkout.termsLabel.click();
        checkout.placeOrderButton.click();
        
        //order success page
        checkout.orderSuccessPageHeading.waitForVisible();
        console.log(checkout.orderNumText.getText());
    });
});



