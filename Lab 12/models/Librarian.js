const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarianSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Librarian", librarianSchema);
