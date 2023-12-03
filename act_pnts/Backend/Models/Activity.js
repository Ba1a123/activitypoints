// models/activity.js
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  category: String,
  activityName: String,
  filename: String,
  expectedPoints: Number,
  approvalPoints: Number,
  rollNo: String,
  approvalStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  submittedFile: String, // Add this line to include the submittedFile field
}, {strict: false});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;


