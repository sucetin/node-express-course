const { writeFile } = require("fs").promises;

const makeFile = async () => {
	try {
		await writeFile("../content/practice2.txt", "THIS IS THE FIRST LINE\n");
		for (let i = 2; i <= 10; i++) {
			await writeFile("../content/practice2.txt", `THIS IS THE LINE ${i}\n`, {
				flag: "a",
			});
		}
	} catch (error) {
		console.log(error);
	}
};

makeFile();

// const start = async () => {
// 	try {
// 		const first = await readFile("../content/first.txt", "utf8");
// 		const second = await readFile("../content/second.txt", "utf8");
// 		await writeFile(
// 			"../content/result-mind-grenade.txt",
// 			`THIS IS AWESOME SUHEYLA, CAN YOU SEE THIS!!: ${first}, ${second}`
// 		);
// 		console.log(first);
// 		console.log(second);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// start();
