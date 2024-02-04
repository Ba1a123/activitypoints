// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./Routers/users');
const signinRouter = require('./Routers/signin');  
const activityRouter = require('./Routers/activity');
const fs = require('fs');
const path =require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection URL
const mongoURI = 'mongodb+srv://balapeesala1022:mSaE2I9xVriuIA4L@cluster0.kf8c2pc.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Use the usersRouter for paths starting with /api/users
app.use('/api/users', usersRouter);
app.use("/api/files", express.static(path.join(__dirname, "./uploads/")));
// Use the signinRouter for /api/signin
app.use('/api/signin', signinRouter);
app.use('/api/activity', activityRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
