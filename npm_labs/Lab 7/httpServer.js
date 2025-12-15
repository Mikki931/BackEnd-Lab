const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Web Server Started @3000");
});