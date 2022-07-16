const express = require("express");
const app = express();

app.use(express.static("./new-public"));

app.get("/sample", (req, res) => {
	res.send("This is working!");
});

app.listen(3000, () => {
	console.log("Server listens on port 3000..");
});
