import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './examt.css';

const TakeExam = () => {
  const [examTitle, setExamTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [examId, setExamId] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormSubmitted(true);
    try {
      const response = await axios.post('https://vijay23055-1.onrender.com/user/student/takeexam', { studentId, examId });
      if (response.status === 200) {
        setExamTitle(response.data.examTitle);
        setQuestions(response.data.questions);
      } else {
        toast.error(`Error fetching exam: ${response.data.message}`);
      }
    } catch (error) {
      toast.error(`Error fetching exam: ${error.response?.data.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (!formSubmitted) {
    return (
      <div className="form-container">
        <div className='form'>
          <h4 className='cred'>Welcome, Before Starting Your Exam </h4>
          <h2>Enter Student ID and Exam ID</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Student ID:</label>
              <input className='enter'
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Exam ID:</label>
              <input className='enter'
                type="text"
                value={examId}
                onChange={(e) => setExamId(e.target.value)}
                required
              />
            </div>
            <button className='submitid' type="submit">Start Exam</button>
          </form>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    toast.success("Exam submitted successfully!");
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="exam-interface">
      <ToastContainer />
      <div className="exam-header">
        <h2 className="exam-title">{examTitle}</h2>
        <hr className="custom-hr" />
        <div className="timer">Time Left: 42min</div>
      </div>

      <div className="exam-content">
        <div className="question-card">
          <div className="question-header">
            <h3 className="title">{currentQuestion?.title}</h3>
            <div className="difficulty-wrapper">
              <div className="vertical-line"></div> {/* Vertical Line */}
              <h3 className="difficulty">Difficulty Level: {currentQuestion?.difficultyLevel}</h3>
              <div className="question-numbers-container">
                <span className="question-numbers">1</span>
                <span className="question-numbers">2</span>
                <span className="question-numbers">3</span>
              </div>
            </div>
          </div>
          <div className="question-text">
            <h3>{currentQuestion?.questionText}</h3>
          </div>
          <div className="options">
            {currentQuestion?.questionType == "true/false" ? (
              <>
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value="True"
                    onChange={handleAnswerChange}
                  />
                  True
                </label>
                <label>
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value="False"
                    onChange={handleAnswerChange}
                  />
                  False
                </label>
              </>
            ) : (
              currentQuestion?.options?.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    onChange={handleAnswerChange}
                  />
                  {option}
                </label>
              ))
            )}
          </div>
        </div>

        <div className="navigation-container">
          <p>Total Questions: {questions.length}</p>
          {/* <div className="question-numbers">
            {questions.map((_, index) => (
              <button
                key={index}
                className={`question-number ${currentQuestionIndex === index ? 'active' : ''}`}
                onClick={() => goToQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div> */}
          <div className="navigation-buttons">
            <button onClick={handleNextQuestion} disabled={currentQuestionIndex >= questions.length - 1}>
              Next Question
            </button>
            {currentQuestionIndex === questions.length - 1 && (
              <button className="submit-button" onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default TakeExam;
