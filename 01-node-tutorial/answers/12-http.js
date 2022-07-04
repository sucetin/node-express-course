const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcome to our home page");
	}
	if (req.url === "/about") {
		res.end("Here is our story");
	}
	res.end(`<h1>Ooooppps!</h1><a href='/'>Back to home</a>`);
});

server.listen(3000);
