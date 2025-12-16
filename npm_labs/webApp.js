const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.get("/contact", (req, res) => {
  res.send("This is contact Page");
});

app.get("/help", (req, res) => {
  res.send("This is Help Page");
});

app.get("/Hello", (req, res) => {
  res.send("This is Hello Page");
});

app.listen(3000, () => {
  console.log("Server Started @3000");
});
