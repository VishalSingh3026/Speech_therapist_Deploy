// Vercel Serverless Function for Contact Form
// @vercel/node runtime configuration:
// - maxDuration: 30s (configured in dashboard)
// - memory: 1024mb (configured in dashboard)

const { connectToDatabase } = require('../lib/db');
const Contact = require('../models/Contact');

module.exports = async (req, res) => {
  console.log('🔵 Contact endpoint hit:', req.method, req.url);
  console.log('🔵 Origin:', req.headers.origin);
  console.log('🔵 Frontend URL env:', process.env.FRONTEND_URL);
  
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

    const { name, email, phone, childAge, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // Create new contact
    const newContact = new Contact({ name, email, phone, childAge, message });
    await newContact.save();

    console.log("✅ Contact saved:", newContact);
    res.status(201).json({ success: true, message: "Message stored successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
