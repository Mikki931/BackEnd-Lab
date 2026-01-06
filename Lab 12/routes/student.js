const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();
const Student = require("../models/Student");
const { generateToken, verifyToken } = require("../middleware/auth");
//router.use(express.json());
const bcrypt = require("bcrypt");

router.post("/addstudent", async (req, res) => {
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

router.get("/students", verifyToken, async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ messsage: "books fetcched", allbooks: student });
  } catch (err) {
    res.json({ err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    var user = await Student.findOne({ email });

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
