// Navbar.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSignOut = () => {
    // Remove the token from local storage (or your state management solution)
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userRollNo');

    // Redirect to the sign-in page or any other desired route
    navigate('/signin');
  };``

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Your logo image */}
        <img src="cbit_logo.png" alt="Logo" className="logo" />
      </div>
      <div className="profile-link">
        <Link
          to="/profile"
          className={activeTab === 'profile' ? 'active' : ''}
          onClick={() => handleTabClick('profile')}
        >
          Profile
        </Link>
      </div>
      <div className="right-links">
        <Link
          to="/dashboard"
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => handleTabClick('dashboard')}
        >
          Dashboard
        </Link>
        <Link
          to="/upload"
          className={activeTab === 'upload' ? 'active' : ''}
          onClick={() => handleTabClick('upload')}
        >
          Upload
        </Link>
        {localStorage.getItem('token') ? ( // Check if a token exists
          <>
            {/* <Link
              to={`/myprofile/${localStorage.getItem('userRollNo')}`}
              className={activeTab === 'myprofile' ? 'active' : ''}
              onClick={() => handleTabClick('myprofile')}
            >
              My Profile
            </Link> */}
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <Link
            to="/signin"
            className={activeTab === 'signin' ? 'active' : ''}
            onClick={() => handleTabClick('signin')}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
