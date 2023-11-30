// EditProfile.js

import React, { useState } from 'react';

const EditProfile = ({ initialData, onSave, onCancel }) => {
  const [editedData, setEditedData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <label>
        Roll Number:
        <input type="text" name="rollNo" value={editedData.rollNo} onChange={handleInputChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={editedData.name} onChange={handleInputChange} />
      </label>
      <label>
        Department:
        <input type="text" name="department" value={editedData.department} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
      </label>
      <label>
        Contact Number:
        <input type="text" name="contactNo" value={editedData.contactNo} onChange={handleInputChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={editedData.address} onChange={handleInputChange} />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={editedData.dob} onChange={handleInputChange} />
      </label>
      <label>
        Father's Name:
        <input type="text" name="fathersName" value={editedData.fathersName} onChange={handleInputChange} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditProfile;
