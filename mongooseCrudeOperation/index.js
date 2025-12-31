const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.mongourl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

const User = require("./user");
const user = require("./user");

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ message: "Users Fetched Successfully", allUsers: users });
  } catch (err) {
    res.json({ err });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      phone,
    });
    res.json({ message: "User Created", newUser: user });
  } catch (err) {
    res.json({ err });
  }
});

app.patch("/update/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User updated successfully",
      updatedUser: user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    res.json({ message: "Deleted Succesfully", deleteUser: user });
  } catch (err) {
    res.json({ err });
  }
});
app.listen(3000);
