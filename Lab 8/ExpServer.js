const express = require("express");

const app = express();

app.use(express.json());

app.get("/users/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/user", (req, res) => {
  res.send(req.query);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  const { name, email, password } = req.body;
  res.send(`Name: ${name}  Email:${email}   Password:${password}`);
});

app.listen(3000, () => {
  console.log("Server Started @3000");
});
