// Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities from the server
    const fetchActivities = async () => {
      try {
        let userData = await localStorage.getItem('userData');
        userData = JSON.parse(userData)
        console.log("USERDATA IS ", userData)
        const response = await axios.get('/api/activity/get/'+userData.Rollno);
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity._id}>
            <strong>{activity.activityName}</strong> - Status: {activity.approvalStatus}, Expected Points: {activity.expectedPoints} 
            {activity.approvalStatus === 'approved'? ', Accepted Points : '+ activity.approvalPoints : ''}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
