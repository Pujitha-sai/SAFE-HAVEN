const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');
const authMiddleware = require('../middleware/authMiddleware');

// Register a new complaint
router.post('/', authMiddleware, async (req, res) => {
  const { type, state, date, location, description } = req.body;
  const userId = req.user.id; // Assuming user ID is in the decoded token

  try {
    const complaint = new Complaint({
      userId,
      type,
      state,
      date,
      location,
      description,
    });
    await complaint.save();
    res.json({ message: 'Complaint registered', complaint });
  } catch (error) {
    res.status(500).json({ error: 'Error registering complaint' });
  }
});

// Get complaint status
router.get('/status/:id', authMiddleware, async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ error: 'Complaint not found' });
    }
    res.json(complaint);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching complaint status' });
  }
});

module.exports = router;