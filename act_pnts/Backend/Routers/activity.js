// routes/activity.js
const express = require('express');
const multer = require('multer');
const Activity = require('../Models/Activity');

const router = express.Router();
const upload = multer();

// Route for handling file upload
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { category, activityName, expectedPoints } = req.body;
    const file = req.file;

    // Save the file to the database
    const activity = new Activity({
      category,
      activityName,
      filename: file.originalname,
      expectedPoints,
      submittedFile:  file.originalname
    });

    await activity.save();

    res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/get', async (req, res) => {
    try {
      const activities = await Activity.find();
      res.json(activities);
    } catch (error) {
      console.error('Error fetching activities:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  // Route for mentor to get submitted activities
router.get('/mentor/activities', async (req, res) => {
    try {
      const activities = await Activity.find({ mentorId: req.user._id }); // Assuming mentorId is stored in the user object
      res.status(200).json(activities);
    } catch (error) {
      console.error('Error fetching activities:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Route for mentor to approve/reject an activity
  router.put('/mentor/activity/:id', async (req, res) => {
    try {
      const activityId = req.params.id;
      const { approvalStatus } = req.body;
  
      const updatedActivity = await Activity.findByIdAndUpdate(
        activityId,
        { $set: { approvalStatus } },
        { new: true }
      );
  
      res.status(200).json(updatedActivity);
    } catch (error) {
      console.error('Error updating activity:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  router.get('/mentor/download/:activityId', async (req, res) => {
    try {
      const activityId = req.params.activityId;
      const activity = await Activity.findById(activityId);
  
      if (!activity || !activity.submittedFile) {
        return res.status(404).send('File not found');
      }
  
      const filePath = path.join(__dirname, 'path_to_uploaded_files', activity.submittedFile);
      res.download(filePath, activity.activityName); // This will prompt the user to download the file
    } catch (error) {
      console.error('Error downloading file:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

module.exports = router;
