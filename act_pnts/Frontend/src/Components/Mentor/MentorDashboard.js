// MentorDashboard.js
import React, { useState, useEffect } from 'react';
import MentorActivityCard from './MentorActivityCard';
import axios from 'axios';

const MentorDashboard = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch mentor's submitted activities
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/api/activity/get');
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h2>Mentor Dashboard</h2>
      {activities.map((activity) => (
        <MentorActivityCard key={activity._id} activity={activity} />
      ))}
    </div>
  );
};

export default MentorDashboard;
