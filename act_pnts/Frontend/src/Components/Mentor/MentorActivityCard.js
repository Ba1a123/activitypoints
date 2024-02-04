// MentorActivityCard.js
import React, { useState } from 'react';
import MentorActivityApprovalForm from './MentorActivityApprovalForm';

const MentorActivityCard = ({ activity }) => {
  const [showDocument, setShowDocument] = useState(false);
  console.log({ activity })

  const handleViewDocument = () => {
    // Set showDocument to true to display the document
    setShowDocument(true);
  };

  return (
    <div>
      <h3>{activity.activityName}</h3>
      <p>Category: {activity.category}</p>
      <p>Expected Points: {activity.expectedPoints}</p>
      <p>Status: {activity.approvalStatus}</p>
      <p>
      {/* console.log({activity.submittedFile}); */}
      </p>
      {/* <p>{activity._id}</p> */}
      {/* console.log({activity.submittedFile}) */}

      {/* View Document Link/Button */}
     {/* View Document Link/Button */}
{activity.submittedFile && activity.submittedFile !== '' && (
  <div>
    <p>
      <button onClick={handleViewDocument}>View Document</button>
    </p>
  </div>
)}

      {/* Approval Form */}
      <MentorActivityApprovalForm activityId={activity._id} />

      {/* Display Document Modal or Component */}
      {showDocument && (
        <div>
          {/* You can implement a modal or display the document directly */}
          <p>Document: <a href={`http://localhost:3000/api/files/${activity.submittedFile}`} target="_blank" rel="noopener noreferrer">Download Document</a></p>
          <button onClick={() => setShowDocument(false)}>Close Document</button>
        </div>
      )}
    </div>
  );
};

export default MentorActivityCard;
