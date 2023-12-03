// MentorActivityApprovalForm.js
import React, { useState } from 'react';
import axios from 'axios';

const MentorActivityApprovalForm = ({ activityId }) => {
  const [approvalStatus, setApprovalStatus] = useState('approved');
  const [approvalPoints, setApprovalPoints] = useState('0');

  const handleApproval = async () => {
    try {
      await axios.put(`/api/activity/mentor/activity/${activityId}`, { approvalStatus: approvalStatus, approvalPoints: approvalPoints });
      // Refresh activities after approval
      // You might want to use state management libraries like Redux for a better approach
      // console.log("ftched successs")
    } catch (error) {
      console.error('Error updating activity:', error);
    }
  };

  return (
    <div>
      <label>
        Approval Status:
        <select value={approvalStatus} onChange={(e) => {
          setApprovalStatus(e.target.value)
          }}>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </label>
      Approval Points
      <input
              type="text"
              value={approvalPoints}
              onChange={(e) => setApprovalPoints(e.target.value)}
            />
      <button onClick={handleApproval}>Submit Approval</button>
    </div>
  );
};

export default MentorActivityApprovalForm;
