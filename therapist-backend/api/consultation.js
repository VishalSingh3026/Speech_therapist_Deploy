// Vercel Serverless Function for Consultation Booking
// @vercel/node runtime configuration:
// - maxDuration: 30s (configured in dashboard)
// - memory: 1024mb (configured in dashboard)

const { connectToDatabase } = require('../lib/db');
const Consultation = require('../models/Consultation');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Connect to database
    await connectToDatabase();

    const { childName, age, parentPhone } = req.body;

    // Validate required fields
    if (!childName || !age || !parentPhone) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Create new consultation
    const newConsultation = new Consultation({ childName, age, parentPhone });
    await newConsultation.save();

    console.log("✅ Consultation saved:", newConsultation);
    res.status(201).json({ success: true, message: "Consultation booked successfully!" });
  } catch (error) {
    console.error("❌ Error saving consultation:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
