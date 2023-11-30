import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/Signup';
import Navbar from './Components/Navbar';
import MyProfile from './Components/Myprofile';
import Upload from './Components/Upload';
import Dashboard from './Components/Dashboard';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  // Determine if Navbar should be displayed based on the current route
  const shouldDisplayNavbar = !['/signin', '/signup'].includes(window.location.pathname);

  return (
    <div className="App">
      {shouldDisplayNavbar && <Navbar />} {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
