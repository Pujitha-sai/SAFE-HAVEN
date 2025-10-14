const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// Update user profile
router.put('/profile', authMiddleware, async (req, res) => {
  const { fullName, email, address, emergencyContact } = req.body;
  const userId = req.user.id; // Assuming user ID is in the decoded token

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { fullName, email, address, emergencyContact },
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'Profile updated', user });
  } catch (error) {
    res.status(500).json({ error: 'Error updating profile' });
  }
});

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profile' });
  }
});

module.exports = router;