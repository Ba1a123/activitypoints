// MyProfile.js

import React, { useState, useEffect } from 'react';
import EditProfile from './Editprofile';
import './Myprofile.css'; // Import the CSS file

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch user data from an API or other source
    const fetchUserData = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (editedData) => {
    // Save the edited data (you can send it to the server or update local state)
    setProfileData(editedData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="container">
      <h2>My Profile</h2>
      {isEditing ? (
        <EditProfile initialData={profileData} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
      ) : (
        <div>
          {profileData ? (
            // Display profile data
            <>
              <div className="profile-section">
                <strong>Name:</strong> {profileData.name}
              </div>
              <div className="profile-section">
                <strong>Roll Number:</strong> {profileData.rollNo}
              </div>
              <div className="profile-section">
                <strong>Email:</strong> {profileData.email}
              </div>
              <div className="profile-section">
                <strong>Password:</strong> ********
              </div>
              <div className="profile-section">
                <strong>Role:</strong> {profileData.role}
              </div>
              <div className="profile-section">
                <strong>Mentor ID:</strong> {profileData.mentorId}
              </div>
              {/* Add other profile fields here... */}
              <button onClick={handleEditClick}>Edit Profile</button>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyProfile;
