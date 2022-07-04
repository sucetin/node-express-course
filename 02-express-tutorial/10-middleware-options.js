const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

//order matters when setting app.use for middleware
//If we provide a path, it's going to be applied only that path
//app.use("/api", logger);
//they will be executed by the order

//1.use vs route
//2.options => our own, express, third party
//--our own
//app.use([logger, authorize]);
//--express
//app.use(express.static("./public"));
//--third party
//morgan, install&import, app.use(morgan('tiny))

app.get("/", (req, res) => {
	res.send("Home");
});
app.get("/about", (req, res) => {
	res.send("About");
});
app.get("/api/products", (req, res) => {
	res.send("Products");
});
app.get("/api/items", (req, res) => {
	res.send("Items");
});

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
