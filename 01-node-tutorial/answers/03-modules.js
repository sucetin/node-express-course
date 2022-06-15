//Modules => encapsulated code
//CommonJS => every file is module, by default
const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-granade");

console.log(names);

sayHi("Suheyla");
sayHi(names.john);
sayHi(names.peter);
