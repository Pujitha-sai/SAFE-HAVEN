const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  fullName: String,
  email: String,
  address: String,
  emergencyContact: String,
});

module.exports = mongoose.model('User', userSchema);