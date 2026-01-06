const mongoose = require("mongoose");

const schema = mongoose.Schema({
  fullname: String,
  username: String,
  password: String,
  age: Number,
});

module.exports = mongoose.model("Lecture", schema);
//schema decides how much data we need to get from the all data user provides
