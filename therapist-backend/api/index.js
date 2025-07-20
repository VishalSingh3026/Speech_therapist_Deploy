// Health check endpoint for Vercel
module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Health check response
  res.status(200).json({
    message: "Speech Therapy Backend API is running on Vercel!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
};
