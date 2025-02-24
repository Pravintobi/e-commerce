import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'; 
import axios from 'axios';

function Login({ onLogin }) {  // Accept the onLogin prop here

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');  // Move useState out of handleSubmit

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("data");
      const response = await axios.post('https://vijay23055-1.onrender.com/user/student/loginstudent', {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        console.log("login successful");
        onLogin(); // Call the onLogin prop to set the login state
        navigate('/home'); // Redirect to home after successful login
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed, please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="text-section">
        <h1 className="title">
          Where Learning Meets <br />
          <p className="highlight">Modern Assessment.</p>
        </h1>
        <p className="description">
          This platform revolutionizes education by integrating advanced assessment tools
          with engaging learning experiences. It aims to provide effective evaluations that
          adapt to today's learners, making assessments not just tests, but integral parts
          of the learning journey.
        </p>
      </div>

      <div className="login-form">
        <input
          type="email"
          className="input-field"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="input-field"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button className="form-button" onClick={handleSubmit}>Login</button>
        <br />
        <Link to="/signup" className="login-link">
          or Sign Up
        </Link>
        {error && <p className="error-message">{error}</p>} {/* Display error if any */}
      </div>
    </div>
  );
}

export default Login;
