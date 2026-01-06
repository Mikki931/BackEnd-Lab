const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();
const Books = require("../models/Books");
const { verifyToken } = require("../middleware/auth");

//router.use(express.json());

router.post("/addbook", async (req, res) => {
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

router.get("/books", verifyToken, async (req, res) => {
  try {
    const books = await Books.find();
    res.json({ messsage: "books fetcched", allbooks: books });
  } catch (err) {
    res.json({ err });
  }
});

module.exports = router;
