// SignUp.js

import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css'; // Import the CSS file

const SignUp = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [mentorId, setMentorId] = useState('');
  const navigate=useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        name,
        rollNo,
        email,
        password,
        role,
        mentorId,
      });

      console.log('Sign Up response:', response.data);
      navigate('/signin');
    }catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }}
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Roll Number:
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select a role</option>
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <label>
            Mentor ID:
            <input
              type="text"
              value={mentorId}
              onChange={(e) => setMentorId(e.target.value)}
            />
          </label>

          <button type="submit" >
            Sign Up
          </button>

          <p>
            Already have an account?
            <Link to="/">Sign In here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
