const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const parse_url =
    "http://localhost:5000/contact?name=bipul&country=bangladesh";
  const parsed_url = url.parse(parse_url, true);
  console.log(parsed_url);
  const queryObject = parsed_url.query;
  console.log(queryObject);
});
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at port ${PORT}`);
