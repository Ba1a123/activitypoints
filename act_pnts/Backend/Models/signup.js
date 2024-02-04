// models/User.js

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'mentor', 'admin'],
    required: true,
  },
  mentorId: {
    type: String,
    required: function () {
      return this.role === 'student'; 
    },
  },
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
