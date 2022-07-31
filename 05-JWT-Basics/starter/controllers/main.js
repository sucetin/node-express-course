//How we can authanticate a user?
//1. mongoose validation
//2. joi
//3. check in the controller*

const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		throw new BadRequestError("Please provide email and password");
	}

	//just for demo, normally should be provided by db!
	const id = new Date().getDate();

	//keep payload small, better experience for user
	//secret should be long complex and unguessable
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
	res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
	console.log(req.user);
	const luckyNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `Hello ${req.user.username}`,
		secret: `Here is your lucky number: ${luckyNumber}`,
	});
};

module.exports = { login, dashboard };
