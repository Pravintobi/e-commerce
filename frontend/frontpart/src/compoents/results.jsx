import React, { useState } from 'react';
import axios from 'axios';
import './results.css'

const ExamResults = () => {
  const [studentId, setStudentId] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://vijay23055-1.onrender.com/user/student/results', { studentId });
      setResults(response.data.results);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while fetching results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="exam-results-container">
      <h2 className='topbar'>Check Exam Results</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentId">Enter Student ID:</label>
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <button className= 'Results'type="submit" disabled={loading}>
          {loading ? 'Fetching Results...' : 'Get Results'}
        </button>
      </form>

      {/* Show error message */}
      {error && <p className="error-message">{error}</p>}

      {/* Display results if available */}
      {results && (
        <div className="results-container">
          <h3>Exam Results</h3>
          <ul>
            {results.map((result, index) => (
              <li className='list' key={index}>
                {/* <strong>Exam Title:</strong> {result.examTitle} <br /> */}
                <strong>Score:</strong> {result.score} <br />
                <strong>Feedback:</strong> {result.feedback}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExamResults;
