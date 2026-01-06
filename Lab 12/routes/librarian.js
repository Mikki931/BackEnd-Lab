const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();
const Librarian = require("../models/Librarian");
//router.use(express.json());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken, verifyToken } = require("../middleware/auth");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    var user = await Librarian.findOne({ email });

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

module.exports = router;
