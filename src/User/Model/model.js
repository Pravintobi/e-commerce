import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    default: uuid, // Automatically generates a UUID for each student
    unique: true, // Ensures the studentId is unique
  },
  username:{
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    firstName: String,
    lastName: String,
    // other profile fields
  },
  enrolledExams: [{
    examId: {
        type:String,  
        ref: 'Exam',
    },
    tittle:
    {
      type: String,
      required:true
    },
    dateEnrolled: {
        type: Date,
        default: Date.now,
    }
}],
results: [{
  examId: {
    type: String,
    ref: 'Exam', // Reference to the Exam model
  },
  score: {
    type: Number,
    required: true, // Score is required
  },
  feedback: {
    type: String,
    required: true, // Feedback is required
  },
  answers: [{
    questionId: {
      type: String, // or mongoose.Schema.Types.ObjectId if using a Question model
    },
    selectedAnswer: {
      type: String,
    },
    correctAnswer: {
      type: String,
    },
    explanation: {
      type: String, // Explanation for the question
    }
  }]
}],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Student = mongoose.model('Student', studentSchema);
export default Student;
