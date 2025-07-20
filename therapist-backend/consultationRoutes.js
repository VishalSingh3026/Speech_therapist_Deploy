const express = require("express");
const router = express.Router();
const Consultation = require("./models/Consultation");

router.post("/consultation", async (req, res) => {
  try {
    const { childName, age, parentPhone } = req.body;

    if (!childName || !age || !parentPhone) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newEntry = new Consultation({ childName, age, parentPhone });
    await newEntry.save();

    res.status(201).json({ message: "Consultation booked successfully!" });
  } catch (error) {
    console.error("Error saving consultation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
