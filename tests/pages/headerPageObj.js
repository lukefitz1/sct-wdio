class Header {
	get header() { return $('#mainheader'); }
	get logo() { return $('#logo-main'); }
	get search() { return $('#search_mini_form'); }
	get miniCartIcon() { return $('#headerlinks > li.hasitems > div'); }
	get miniCartDropdown() { return $('#topCartContent'); }
	get miniCartCheckoutBtn() { return $('#topCartContent > div > div > button'); }
}

module.exports = new Header();