import React, { useState } from 'react';
import axios from 'axios'; 
import './enrllexam.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

const EnrollInExam = () => {
  const [email, setEmail] = useState('');
  const [examId, setExamId] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Creating the payload for the POST request
    const payload = { email, examId, title };

    try {
      // Making POST request to the backend API
      const response = await axios.post('https://vijay23055-1.onrender.com/user/student/enrollexam', payload);
      
      if (response.status === 200) {
        setMessage(response.data.message);
        
        // Show success toast
        toast.success("Successfully enrolled in exam!", {
          position: "top-center",
          autoClose: 2000, // 2 seconds
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          onClose: () => navigate('/home'), // Redirect to home after closing toast
        });
      }
    } catch (error) {
      console.error('Error enrolling in exam:', error.response?.data.message || error.message);
      setMessage('Error enrolling in exam: ' + (error.response?.data.message || error.message));
      
      // Show error toast
      toast.error("Failed to enroll in exam.", {
        position: "top-center",
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="enroll-form-container">
        <div className="enroll-form">
      <h2>Enroll in Exam</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Exam ID:</label>
          <input 
            type="text" 
            value={examId} 
            onChange={(e) => setExamId(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit" style={{textDecoration:"none"}}>Enroll</button>
      </form>
      {message && <p>{message}</p>}

      {/* Toast Container to render notifications */}
      <ToastContainer />
      </div>
    </div>
  );
};

export default EnrollInExam;
