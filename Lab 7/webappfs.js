const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end(fs.readFileSync("about.txt", "utf-8"));
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end(fs.readFileSync("contact.txt", "utf-8"));
  } else if (req.url === "/login") {
    res.statusCode = 200;
    res.end(fs.readFileSync("login.txt", "utf-8"));
  } else {
    res.statusCode = 404;
    res.end("404! Page not found");
  }
});

server.listen(3000, () => {
  console.log("Web Server Started @3000");
});
