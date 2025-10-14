const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Add a log to confirm the server is starting
console.log('Starting server...');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const complaintRoutes = require('./routes/complaint');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/complaints', complaintRoutes);

// Log the MongoDB URI (without the password for security)
console.log('MongoDB URI (without password):', process.env.MONGODB_URI.replace(/:([^:@]+)@/, ':<password>@'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));