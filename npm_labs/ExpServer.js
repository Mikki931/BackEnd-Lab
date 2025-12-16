const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("Hello World Post");
});

app.listen(3000, () => {
  console.log("Server Started @3000");
});
