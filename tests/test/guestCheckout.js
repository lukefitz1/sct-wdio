describe("Guest checkout - should complete guest checkout on B2C site", function() {
    this.timeout(15000);
    it("should add product to cart, click checkout button", function () {
        browser.url("/teeny-weeny-doggie-bag-lunch-box");

        //Ensure add to cart button is visible, mini cart is not visible
        expect(prod.addToCart.isVisible()).to.be.true;
        expect(header.miniCartDropdown.isVisible()).to.be.false;
        
        //add simple product to cart
        prod.addToCart.click();
        
        //wait for mini cart to display, go to checkout
        header.miniCartDropdown.waitForVisible();
        header.miniCartCheckoutBtn.waitForVisible();
        header.miniCartCheckoutBtn.click();
    });

    it("should select checkout as guest", function() {
        //select checkout as guest
        checkout.checkoutTypeForm.waitForVisible();
        checkout.checkoutAsGuestLabel.click();
        checkout.continueBtn.click();
    });

    it("should submit billing address form", function() {
        //generate random string for email
        rand = base.generateRandomString();
        
        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.submitBillingForm('Luke', 'Fitzgerald', 'luke.fitzgerald-' + rand + '@blueacorn.com', 
            '145 Williman St', 'Charleston', 'South Carolina', '29403', '8779442583', 
            'guest');
    });

    it("should submit shipping method form", function() {
        //select shipping method, submit form
        checkout.shippingMethodForm.waitForVisible();
        checkout.groundShippingLabel.click();
        checkout.submitShippingMethodForm();

    });

    it("should submit payment method form", function() {
        //select payment method (cc), submit form
        checkout.paymentMethodForm.waitForVisible();
        
        if (env === 'stage') {
            checkout.moneyOrderRadioBtn.click();    
        } else if (env === 'prod') {
            checkout.ccLabel.click();
            //checkout.fillCCForm('Visa', '4111111111111111', '04 - April', '2023', '123');
            checkout.fillCCForm('', '', '08 - August', '2019', '158');
        }
        
        checkout.submitPaymentMethodForm();
    });

    it("should submit order", function() {
        //place order
        checkout.orderReview.waitForVisible();
        checkout.placeOrderButton.waitForVisible();
        checkout.termsLabel.click();
        checkout.placeOrderButton.click();
    });

    it("should review order success page", function() {
        //order success page
        checkout.orderSuccessPageHeading.waitForVisible();
        console.log(checkout.orderNumText.getText());
    });
});