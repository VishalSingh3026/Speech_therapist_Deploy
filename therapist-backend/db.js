const mongoose = require("mongoose");

// ✅ Use environment variable for MongoDB URI
const MONGO_URI = process.env.MONGODB_URI;

// ✅ Check if MongoDB URI is provided
if (!MONGO_URI) {
  console.error("❌ MongoDB URI not found in environment variables");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
.then(() => {
  console.log("✅ Connected to MongoDB");
})
.catch((error) => {
  console.error("❌ MongoDB connection error:", error);
  process.exit(1);
});
