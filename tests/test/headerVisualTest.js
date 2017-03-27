describe("Header Visual Test", function () {
    it("should visualy test the header on the homepage", function () {
        browser.url("/");

        //wait for header to display, make sure it does display
        header.header.waitForVisible();
        expect(header.header.isVisible()).to.be.true;

        browser.webdrivercss('homepage header', [{
            name: 'logo',
            elem: '#mainheader'
        }]);

    });
});