//No window on node.js

//__dirname => path to current directory
//__filename
//require => function to use modules
//module => info about the current module
//process => info about env where the program being executed

console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(process);

setInterval(() => {
	console.log("Suheyla's world");
}, 1000);
