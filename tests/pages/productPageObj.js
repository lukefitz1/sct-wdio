class ProductPage {
	get addToCart() { return $('#buyme > ul > li.addtocart > button'); }

	//wholesale product page
	get firstPatternQtyInput() { return $('#qty-4140'); }
}

module.exports = new ProductPage();