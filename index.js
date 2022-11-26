// const http = require("http");
// console.log(http);
// const _ = require("underscore");

// const server = http.createServer(function (req, res) {
//   console.log(`server is running`);
// });

// server.listen(5000, () => {
//   console.log("server is running");
// });
// var stooges = [
//   { name: "moe", age: 40 },
//   { name: "larry", age: 50 },
//   { name: "curly", age: 60 },
// ];
// const res = _.pluck(stooges, "name");
// console.log(res);

const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello node js");
});
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at port ${PORT}`);
