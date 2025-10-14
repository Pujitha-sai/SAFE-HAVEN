const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: String,
  state: String,
  date: Date,
  location: String,
  description: String,
  status: { type: String, default: 'Under Investigation' },
  timeline: [String],
});

module.exports = mongoose.model('Complaint', complaintSchema);