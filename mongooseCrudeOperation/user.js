const mongoose = require("mongoose");
const Schema = mongoose.Schema; //if you don't write this line then const userSchema=mongoose.Schema({}) will also work

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    phone: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
