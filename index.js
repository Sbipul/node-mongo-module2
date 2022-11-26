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
  } else if (req.url == "/details") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<p>This is details page</p>");
    res.end();
  } else if (req.url == "/data") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(JSON.stringify({ name: "bipul chandro roy" }));
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
