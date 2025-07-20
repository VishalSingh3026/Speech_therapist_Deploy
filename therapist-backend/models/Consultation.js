const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  childName: { type: String, required: true },
  age: { type: Number, required: true },
  parentPhone: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Consultation", consultationSchema);
