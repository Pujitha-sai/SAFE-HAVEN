const express = require('express');
const router = express.Router();
const User = require('../models/User');

// In-memory store for OTPs (for development only—use a database or session in production)
const otps = {};

router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;
  console.log('Received send-otp request for phone:', phone);
  
  if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
    console.log('Invalid phone number');
    return res.status(400).json({ error: 'Invalid phone number. Must be 10 digits.' });
  }

  const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate 4-digit OTP
  otps[phone] = otp; // Store OTP temporarily
  console.log(`Generated OTP for ${phone}: ${otp}`); // Log OTP for testing
  res.json({ message: 'OTP generated (check console for testing)', otp }); // In production, don’t return OTP
});

router.post('/verify-otp', async (req, res) => {
  const { phone, otp } = req.body;
  console.log('Received verify-otp request for phone:', phone, 'with OTP:', otp);

  if (!phone || !otp) {
    console.log('Missing phone or OTP');
    return res.status(400).json({ error: 'Phone number and OTP are required.' });
  }

  if (otps[phone] && otps[phone] === otp) {
    // OTP is valid, check or create user
    try {
      let user = await User.findOne({ phone });
      if (!user) {
        user = new User({ phone });
        await user.save();
        console.log('New user created:', user);
      } else {
        console.log('Existing user found:', user);
      }
      delete otps[phone]; // Clear OTP after verification
      console.log('OTP verified successfully');
      res.json({ message: 'OTP verified', token: 'dummy-token' });
    } catch (error) {
      console.error('Error saving user to database:', error);
      res.status(500).json({ error: 'Failed to save user to database.' });
    }
  } else {
    console.log('Invalid OTP');
    res.status(400).json({ error: 'Invalid OTP' });
  }
});

module.exports = router;