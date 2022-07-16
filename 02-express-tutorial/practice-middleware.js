const consoleLog = (req, res, next) => {
	console.log("I am a middleware function!");
	next();
};

module.exports = consoleLog;
