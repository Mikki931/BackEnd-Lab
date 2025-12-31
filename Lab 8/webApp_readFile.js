const express = require("express");
const fs = require("fs");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/about", (req, res) => {
  res.send(fs.readFileSync("about.txt", "utf-8"));
});

app.put("/contact", (req, res) => {
  res.send(fs.readFileSync("contact.txt", "utf-8"));
});

app.all("/login", (req, res) => {
  res.send(fs.readFileSync("login.txt", "utf-8"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`);
});
