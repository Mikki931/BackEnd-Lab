const express = require("express");
const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
//const bcrypt = require("bcrypt");

mongoose
  .connect(process.env.mongourl)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const lib = require("./routes/librarian");
app.use("/api/librarian", lib);

const stud = require("./routes/student");
app.use("/api/student", stud);

const bk = require("./routes/books");
app.use("/api/book", bk);

const trans = require("./routes/transaction");
app.use("/api/transaction", trans);

app.listen(3000);
