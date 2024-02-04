// UploadForm.js

import React, { useState } from 'react';
import './UpdateForm.css';
import axios from 'axios';


const UploadForm = () => {
  const [category, setCategory] = useState('');
  const [activityName, setActivityName] = useState('');
  const [file, setFile] = useState(null);
  const [expectedPoints, setExpectedPoints] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleActivityNameChange = (e) => {
    setActivityName(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleExpectedPointsChange = (e) => {
    setExpectedPoints(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can perform file upload logic here
    // For now, let's just log the selected category, activity name, file, and expected points
    // console.log('Category:', category);
    // console.log('Activity Name:', activityName);
    // console.log('File:', file);
    // console.log('Expected Points:', expectedPoints);
    try {
      let userData = await localStorage.getItem('userData');
      userData = JSON.parse(userData)
      const formData = new FormData();
      formData.append('category', category);
      formData.append('activityName', activityName);
      formData.append('fileName', file.name)
      formData.append('file', file);
      formData.append('expectedPoints', expectedPoints);
      formData.append('rollNo', userData.Rollno)

      await axios.post('/api/activity/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Activity uploaded successfully');
    } catch (error) {
      console.error('Error uploading activity:', error);
    }
  };

  return (
    <div className="upload-form">
      <h2>Upload</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange} required>
          <option value="" disabled>Select a category</option>
          <option value="internships">Internships</option>
          <option value="extracurricular">Extracurricular Activities</option>
        </select>

        <label htmlFor="activityName">Activity Name:</label>
        <input
          type="text"
          id="activityName"
          value={activityName}
          onChange={handleActivityNameChange}
          placeholder="Specify the activity name"
          required
        />

        <label htmlFor="file">Choose a file:</label>
        <input type="file" id="file" onChange={handleFileChange} accept=".pdf, .doc, .docx, .img, .png" required />

        <label htmlFor="expectedPoints">Expected Points:</label>
        <input
          type="number"
          id="expectedPoints"
          value={expectedPoints}
          onChange={handleExpectedPointsChange}
          placeholder="Enter expected points"
          required
        />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadForm;
