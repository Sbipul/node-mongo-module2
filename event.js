const events = require("events");
const eventEmitter = new events.EventEmitter();

const scream = () => {
  console.log("i am screamming");
};
eventEmitter.on("scream", scream).scream;
eventEmitter.emit("scream");
