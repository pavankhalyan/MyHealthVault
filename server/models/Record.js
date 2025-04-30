const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: { type: String, required: true },
  description: { type: String },
  filePath: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Record", recordSchema);
