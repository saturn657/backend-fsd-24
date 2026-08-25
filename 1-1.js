const EventEmitter = require('events');
const event = new EventEmitter();

event.on("greet", (name = "friend") => console.log(`Hello, ${name}!`));
event.on("exit", () => console.log("Goodbye!"));

event.emit("greet", "Alice");
event.emit("exit");