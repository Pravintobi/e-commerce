import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './compoents/signup.jsx';
import Login from './compoents/login.jsx';
import Home from './compoents/Home.jsx';
import EnrollInExam from './compoents/enrllexam.jsx';
import UserSidebar from './compoents/usersidebar.jsx';
import Exam from './compoents/examt.jsx';
import ExamResults from './compoents/results.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status

  const handleLogin = () => {
    setIsLoggedIn(true); // Function to set user as logged in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Function to log out
  };

  return (
    <Router>
      <div className="app-container">
        {!isLoggedIn ? ( // Show login/signup if user is not logged in
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onLogin={handleLogin} />} /> 
            <Route path="*" element={<Login onLogin={handleLogin} />} />
          </Routes>
        ) : (
          <>
            <UserSidebar onLogout={handleLogout} /> {/* Show sidebar when logged in */}
            
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/enroll" element={<EnrollInExam />} />
                <Route path="/take-exam" element={<Exam />} />
                <Route path='/results' element={<ExamResults/>}/>
              </Routes>
           
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
