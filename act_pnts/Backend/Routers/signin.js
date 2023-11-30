// signin.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/signup');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(401).json({ message: 'No user found' });
    }

const trimmedPassword = password.trim();
const trimmedStoredPassword = user.password.trim();
// const isPasswordValid = await bcrypt.compare(trimmedPassword, trimmedStoredPassword);

// If the password is incorrect, return an error
console.log('Provided Password:', password);
console.log('Stored Hashed Password:', user.password);
const isPasswordValid = user.password === password;
console.log('Stored Hashed Password:',  isPasswordValid);





// If the password is incorrect, return an error
if (!isPasswordValid) {
  console.log('Password Comparison Failed');
  return res.status(401).json({ message: 'Incorrect password' });}
    // Check if the user has the required role
    if (user.role !== role) {
      return res.status(403).json({ message: 'Unauthorized role' });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id, role: user.role }, 'your-secret-key', { expiresIn: '1h' });

    // Return the token in the response
    res.status(200).json({token, userRole: user.role, userId: user.id, Rollno:user.rollNo  });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
