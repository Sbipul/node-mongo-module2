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
  if (req.url == "/home" || req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<p>This is home page</p>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<p>This is about us page</p>");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<p>This is contact page</p>");
    res.end();
  } else if (req.url == "details") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<p>This is details page</p>");
    res.end();
  } else {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<p>This is error page</p>");
    res.end();
  }
});
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at port ${PORT}`);
