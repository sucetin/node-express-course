const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//on - listen for specific event
//emit - emit that event
//response is the name of the event for this specific case
//order matters => first listen for the event (on), then emit it

customEmitter.on("response", (name, id) => {
	console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
	console.log(`some other logic here`);
});

customEmitter.emit("response", "Suheyla", "198");
