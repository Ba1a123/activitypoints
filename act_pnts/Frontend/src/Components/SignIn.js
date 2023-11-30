// SignIn.js
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css'; // Import the CSS file

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/signin', {
        email,
        password,
        role,
      });

      console.log('Sign In response:', response.data);

      const { token, userRole } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userData', JSON.stringify(response.data));

      // Redirect based on the user's role
      if (userRole === 'admin') {
        navigate('/admin/dashboard');

      } else if (userRole === 'mentor') {
        navigate('/mentor/dashboard');
      }
        else {
        navigate('/dashboard');
      }
    } 
     catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }
  
  };

  return (
    <div className="signin-body">
      <div className="card-container">
        <div className="card">
          <h2>Sign In</h2>
          <form>
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
            <p>
              Don't have an account? <Link to="/signup">Register here</Link>
            </p>
            <button type="button" onClick={handleSignIn}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
