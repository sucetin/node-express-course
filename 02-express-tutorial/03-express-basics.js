const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.status(200).send("Home");
});

app.get("/about", (req, res) => {
	res.status(200).send("About");
});

app.all("*", (req, res) => {
	res.status(404).send("<h1>Not found</h1>");
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000");
});

//app.get
//app.post
//app.delete
//app.put
//app.all
//app.use
//app.listen
