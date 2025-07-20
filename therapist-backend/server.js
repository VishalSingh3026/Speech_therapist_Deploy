//new code 

// ✅ Load environment variables first
require('dotenv').config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");
const Consultation = require("./models/Consultation"); // ✅ newly added model
require("./db"); // ensures MongoDB connection from db.js

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173", // Vite dev server
    "http://localhost:3000", // React dev server
    process.env.FRONTEND_URL, // Production frontend URL
  ],
  credentials: true
}));
app.use(express.json());

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Speech Therapy Backend API is running!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// ✅ Contact Form Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, childAge, message } = req.body;

    const newContact = new Contact({ name, email, phone, childAge, message });
    await newContact.save();

    console.log("✅ Contact saved:", newContact);
    res.status(201).json({ success: true, message: "Message stored successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
});

// ✅ New Consultation Route
app.post("/api/consultation", async (req, res) => {
  try {
    const { childName, age, parentPhone } = req.body;

    if (!childName || !age || !parentPhone) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newConsultation = new Consultation({ childName, age, parentPhone });
    await newConsultation.save();

    console.log("✅ Consultation saved:", newConsultation);
    res.status(201).json({ success: true, message: "Consultation booked successfully!" });
  } catch (error) {
    console.error("❌ Error saving consultation:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


