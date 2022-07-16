const os = require("os");
const { writeFile } = require("fs");
const sentence = require("./practice2.js");

writeFile(
	"../content/practice.txt",
	`${sentence}, ${os.userInfo().username}`,
	(err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log("done with this task");
	}
);

console.log(sentence);
