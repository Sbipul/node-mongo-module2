const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    fs.readFile("./data.text", (err, data) => {
      if (err) {
        res.write("failed to read data");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
});
const port = 5000;
server.listen(port, () => {
  console.log("server is running");
});
