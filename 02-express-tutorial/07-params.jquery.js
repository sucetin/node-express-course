const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
	res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products/1", (req, res) => {
	const singleProduct = products.find((product) => product.id === 1);
	res.json(singleProduct);
});

app.get("/api/products/:productID", (req, res) => {
	//log(req.params)
	const { productID } = req.params;
	const product = products.find((product) => product.id === Number(productID));
	if (!product) {
		return res.status(404).send("Product does not exist");
	}
	res.json(product);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
	console.log(req.params);
	res.send("Hellooo");
});

app.get("/api/v1/query", (req, res) => {
	//console.log(req.query);
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}

	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}

	if (sortedProducts.length < 1) {
		// res.status(200).send("No product found based on your search");
		return res.status(200).json({ success: true, data: [] });
	}
	return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
	console.log("Server listens!");
});
