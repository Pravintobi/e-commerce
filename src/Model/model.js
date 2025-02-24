import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';
// Define QuestionBank schema
const questionBankSchema = new mongoose.Schema({
  questionID: {
    type: String,
    default: uuid, // Automatically generates a UUID for each student
    unique: true, // Ensures the studentId is unique
  },
  questionType: {
    type: String,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  difficultyLevel: {
    type: String,
    enum: ['easy', 'medium', 'hard'],  // Predefined difficulty levels
    required: true,
  },
  topic: {
    type: String,  // You could change this to an array if questions have multiple topics
    required: true,
  },
  examType: {
    type: Boolean,  // True/false type
    required: true,
  },
  category: {
    type: String,
    required: true,  // General category, like "Math", "Science", etc.
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



// Define the Exam schema
const examSchema = new mongoose.Schema({
  examId:{
    type:String,
    required:true,
  },
  examTitle: {
    type: String,
    required: true,
  },
  examDate: {
    type: Date,
    required: true,
  },
  examTime: {
    type: String, // Use a string to store time, or use a Date object for full timestamp
    required: true,
  },
  duration: {
    type: Number, // Duration in minutes
    required: true,
  },
  timeLimitPerQuestion: {
    type: Number, // Time limit for each question in minutes
    default: null,
  },
  totalTimeLimit: {
    type: Number, // Total time limit for the exam in minutes
    default: null,
  },
});

const QuestionBank = mongoose.model('QuestionBank', questionBankSchema);
const Exam = mongoose.model('Exam', examSchema);

// Export the models
export default { QuestionBank, Exam };
