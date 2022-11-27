const fs = require("fs");
const readStream = fs.createReadStream("./data.text");
readStream.on("data", (chunk) => {
  console.log("........................");
  console.log(chunk);
});
readStream.on("open", () => console.log("stream is open"));
setTimeout(() => {
  readStream.pause();
  console.log("stream has been pause");
}, 15);
setTimeout(() => {
  readStream.resume();
  console.log("stream has been start again");
}, 15);
