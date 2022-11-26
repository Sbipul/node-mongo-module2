const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    //============================================================= async read file
    // fs.readFile("./data.text", (err, data) => {
    //   if (err) {
    //     res.write("failed to read data");
    //     res.end();
    //   } else {
    //     res.write(data);
    //     res.end();
    //   }
    // });
    //============================================================== sync read file
    // const data = fs.readFileSync("./data.text");
    // res.write(data);
    // res.end();

    //================================================= existing file write async way
    const newData = "This is new data to test if data is change or not";
    fs.writeFile("./data.text", newData, (err) => {
      if (err) {
        res.write("Failed to write data");
        res.end();
      } else {
        res.write("Data written successfully");
        res.end();
      }
    });
  }
});
const port = 5000;
server.listen(port, () => {
  console.log("server is running");
});
