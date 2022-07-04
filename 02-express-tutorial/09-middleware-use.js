const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

//order matters when setting app.use for middleware
//If we provide a path, it's going to be applied only that path
//app.use("/api", logger);
//they will be executed by the order
app.use([logger, authorize]);

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
