const express = require("express");
const router = express.Router();

const Transaction = require("../models/Transaction");
const Book = require("../models/Books");
const Student = require("../models/Student");
const { verifyToken } = require("../middleware/auth");

// Issue a book
router.post("/issue", verifyToken, async (req, res) => {
  try {
    const { studentId, bookId, copies } = req.body;

    if (!studentId || !bookId || !copies) {
      return res
        .status(400)
        .json({ message: "studentId, bookId, and copies are required" });
    }

    if (copies <= 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be greater than 0" });
    }

    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });

    if (book.quantity < copies) {
      return res.status(400).json({ message: "Not enough copies available" });
    }

    // Create transaction
    const transaction = await Transaction.create({
      studentId,
      bookId,
      quantity: copies,
      status: "ISSUED",
      issueDate: new Date(),
    });

    // Update book stock
    book.quantity -= copies;
    await book.save();

    res.status(201).json({ message: "Book issued successfully", transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Return a book
router.post("/return", verifyToken, async (req, res) => {
  try {
    const { transactionId } = req.body;

    if (!transactionId) {
      return res.status(400).json({ message: "transactionId is required" });
    }

    const transaction = await Transaction.findById(transactionId);
    if (!transaction || transaction.status === "RETURNED") {
      return res.status(400).json({ message: "Invalid transaction" });
    }

    transaction.status = "RETURNED";
    transaction.returnDate = new Date();
    await transaction.save();

    // Increment book stock
    await Book.findByIdAndUpdate(transaction.bookId, {
      $inc: { quantity: transaction.quantity }, // match schema
    });

    res.json({ message: "Book returned successfully", transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
