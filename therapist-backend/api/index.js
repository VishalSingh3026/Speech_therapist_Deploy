// Health check endpoint for Vercel - Simplified
module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Health check response
  res.status(200).json({
    message: "✅ Backend is working!",
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url
  });
};
