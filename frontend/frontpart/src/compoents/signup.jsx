import './signup.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Password and confirm password do not match');
      return;
    }

    try {
      const response = await axios.post('https://vijay23055-1.onrender.com/user/student/createstudent', {
        username: formData.email, // You can also use another username field if desired
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        email: formData.email,
        profile: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
      });
      
      if (response.status === 201) {
        navigate('/login'); // Redirect to login after successful signup
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setError('Signup failed, please try again.');
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

      <div className="signup-form">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            className="input-field"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            required
          />
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
          <input
            type="password"
            className="input-field"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            required
          />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <br />
        <Link to="/login" style={{ textDecoration: 'none', color: '#007bff' }}>
          <p style={{ marginLeft: "59px" }}>or Already have an Account? Log in</p>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
