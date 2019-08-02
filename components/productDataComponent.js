

angular.module("myApp")
	.component("productDataComponent", {

		bindings: {

		},

		templateUrl: "components/productDataComponent.html",

		controller: ["productDataService", productDataControllerFunction],

		controllerAs: "productDataController"

	});

function productDataControllerFunction(productDataService) {

	var self = this;
	self.itemCount = "0";
	self.product_id = "";
	self.product_name = "";
	self.product_description = "";
	self.product_rating = "";

	self.sortIndexList = {
		"selectedOption": "null",
		"availableOptions": [{ id: '1', name: "Select" },
		{ id: '2', name: "Price: Low To High" },
		{ id: '3', name: "Price: High To Low" },
		{ id: '4', name: "Product: A To Z" }]
	};

	self.sortProducts = function () {
		var selectedElement = document.getElementById("sortId");
		var value = selectedElement.options[selectedElement.selectedIndex].value;
		self.sortText = selectedElement.options[selectedElement.selectedIndex].text;
		console.log(self.sortText);
		// upto here i have accesed the selected sort CanvasPattern. now creat filetr to sort data as
		//  per sort selected
	}

	self.itemsCart = [];
	self.cartDiv=false;
	self.showCart = function(){
		self.cartDiv = !self.cartDiv;
	}

	self.addItemToCart = function (productToAdd) {
		self.itemCount++;
		console.dir(productToAdd);
		self.itemsCart.push(productToAdd);
		console.dir(self.itemsCart);
	}

	productDataService.getProductData().then(function (response) {
		self.productData = response.productDetail;
		console.log(self.productData);
	});
}