const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const Books = require("./Books");
const Librarian = require("./Librarian");
const Student = require("./Student");
app.use(express.json());
const bcrypt = require("bcrypt");

mongoose
  .connect(process.env.mongourl)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.secret, { expiresIn: "1h" });
};

const verifyToken = (req, res, next) => {
  const authheader = req.headers.authorization;
  if (!authheader) {
    return res.status(401).send("Token Missing");
  }
  const token = authheader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.secret);
    req.id = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

app.post("/addstudent", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const hashPassword = await bcrypt.hash(password, 10);
    const student = await Student.create({
      name,
      email,
      password: hashPassword,
    });
    res.json({
      message: "Student registered successfully",
      newStudent: student,
    });
  } catch (err) {
    res.json({ err: err.message });
  }
});

app.post("/addlibrarian", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    const hashPassword = await bcrypt.hash(password, 10);
    const librarian = await Librarian.create({
      name,
      email,
      password: hashPassword,
    });
    res.json({
      message: "Librarian registered successfully",
      newStudent: librarian,
    });
  } catch (err) {
    res.json({ err: err.message });
  }
});

app.post("/addbook", async (req, res) => {
  try {
    const { title, id, quantity } = req.body;
    const book = await Books.create({
      title,
      id,
      quantity,
    });
    res.json({
      message: "Book registered successfully",
      newBook: book,
    });
  } catch (err) {
    res.json({ err });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    var user = await Student.findOne({ email });
    if (!user) {
      user = await Librarian.findOne({ email });
    }

    if (!user) {
      return res.json({ message: "user not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ message: "invalid credentials" });
    }
    const token = await generateToken(user._id);
    res.json({ message: "user login successfully", token: token });
  } catch (err) {
    res.json({ err });
  }
});

app.get("/books", verifyToken, async (req, res) => {
  try {
    const books = await Books.find();
    res.json({ messsage: "books fetcched", allbooks: books });
  } catch (err) {
    res.json({ err });
  }
});

app.listen(3000);
