import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/Signup';
import Navbar from './Components/Navbar';
import MyProfile from './Components/Myprofile';
import Upload from './Components/Upload';
import Dashboard from './Components/Dashboard';
import MentorDashboard from './Components/Mentor/MentorDashboard';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { Component } from 'react';
// Import necessary components and libraries


function App() {
  const navigate = useNavigate();

  // Assume you have userRole information available
  const userRole = 'student'; // Replace with the actual user's role

  // Determine if Navbar should be displayed based on the user's role and current route
  const shouldDisplayNavbar = userRole === 'student' && !['/signin', '/signup'].includes(window.location.pathname);

  return (
    <div className="App">
      {shouldDisplayNavbar && <Navbar />}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

