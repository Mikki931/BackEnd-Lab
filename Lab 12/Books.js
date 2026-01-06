const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: String,
    id: Number,
    quantity: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
