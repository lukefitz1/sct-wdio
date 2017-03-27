describe("Open account create page", function () {
    it("should create B2C customer account successfully", function () {
        browser.url("/customer/account/create");

        //assert that the login form is displayed on page load
        expect(account.accountCreateForm.isVisible()).to.be.true;
        expect(account.submitBtn.isVisible()).to.be.true;

        //generate random string for email
        rand = base.generateRandomString();

        //submit create account form
        account.createAccount('Luke', 'Fitzgerald', 'luke.fitzgerald-' + rand + '@blueacorn.com', 'pass4luke');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;
        expect(account.successMessage.isVisible()).to.be.true;
    });

    it("should submit application for B2B account successfully", function () {
        browser.url(wholesaleUrl + "/customer/account/create");

        //assert that the login form is displayed on page load
        expect(account.accountCreateForm.isVisible()).to.be.true;
        expect(account.submitBtn.isVisible()).to.be.true;

        //generate today's date for wholesale account creation
        var today = new Date();

        //generate random string for email
        rand = base.generateRandomString();

        //login
        account.createWholesaleAccount('Luke', 'Fitzgerald', 
            'luke.fitzgerald-dealer-' + rand + '@blueacorn.com', (today.getMonth() + 1), 
            today.getDate(), today.getFullYear(), 'Other', 'test', 
            'Online Business', 'test', 'Others', 'test', 'test', 
            '8779442583', '145 Williman St', 'Charleston', 'South Carolina', 
            '29403', 'pass4luke');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;
        expect(account.successMessage.isVisible()).to.be.true;
    });
});