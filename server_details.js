const http = require("http");
console.log(http);
const _ = require("underscore");

const server = http.createServer(function (req, res) {
  console.log(`server is running`);
});

server.listen(5000, () => {
  console.log("server is running");
});
var stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];
const res = _.pluck(stooges, "name");
console.log(res);
