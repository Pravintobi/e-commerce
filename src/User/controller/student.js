import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';
import 'dotenv/config';
import { v4 as uuid } from 'uuid';
import auth from '../utils/auth.js';
import Student from '../Model/model.js';

const client = new MongoClient(process.env.DB_URL);
const db_name = process.env.DB_NAME;

const createStudent = async (req, res) => {
  try {
    await client.connect();
    const StudentCollection = client.db(db_name).collection('students');
    
    const { username, password,confirmPassword, email, profile } = req.body;
    // req.body.id = uuid()
    // Hash the password
    // req.body.id = uuid()
    const hashedPassword = await auth.authentication(password)
    const studentId = uuid();

    if (password !== confirmPassword) {
      return res.status(400).send({ message: 'Password and confirm password do not match' });
    }

    // Create a new student object
    const newStudent = new Student({
      studentId,
      username,
      password: hashedPassword,
      email,
      profile,
    });

    // Insert the student into the collection
    await StudentCollection.insertOne(newStudent);

    res.status(201).send({ message: 'Student created successfully', student: newStudent });
  } catch (error) {
    res.status(500).send({ message: 'Error creating student', error });
  } finally {
    await client.close();
  }
};


const loginStudent = async (req, res) => {
    try {
      await client.connect();
      const StudentCollection = client.db(db_name).collection('students');
  
      const { email, password } = req.body;
      console.log('Searching for email:', email);
      // Find the student by email
      const student = await StudentCollection.findOne({ email });
      if (!student) {
        return res.status(404).send({ message: 'Student not found' });
      }
  
      // Compare the hashed password
      const match = await auth.comparepass(student.password, password); // Make sure to await this
      if (!match) {
        return res.status(401).send({ message: 'Invalid password' });
      }
  
      // Successful login
      res.status(200).send({ message: 'Login successful', student });
  
    } catch (error) {
      res.status(500).send({ message: 'Error logging in', error });
    } finally {
      await client.close();
    }
  };

const takeExam = async (req, res) => {
    try {
        await client.connect();

        const { studentId, examId } = req.body;
        const StudentCollection = client.db(db_name).collection('students');
        const ExamCollection = client.db(db_name).collection('exam');
        const QuestionCollection = client.db(db_name).collection('Question');

        // 1. Check if the student is enrolled in the exam
        const student = await StudentCollection.findOne({ studentId, "enrolledExams.examId": examId });
        if (!student) {
            return res.status(404).send({ message: 'Student not enrolled in this exam' });
        }

        // 2. Fetch exam details from the exam collection
        const exam = await ExamCollection.findOne({ examId: examId });

        if (!exam) {
            return res.status(404).send({ message: 'Exam not found' });
        }

        // 3. Fetch questions related to the exam from the question collection
        // Assuming `topic` in the Question collection corresponds to `examTitle` in the Exam collection
        const questions = await QuestionCollection.find({ topic: exam.examTitle }).toArray();

        if (!questions.length) {
            return res.status(404).send({ message: 'No questions found for this exam' });
        }

        // Send the questions to the client
        res.status(200).send({ examTitle: exam.examTitle, questions });
    } catch (error) {
        console.error('Error fetching exam questions:', error.message);
        res.status(500).send({ message: 'Error fetching exam questions', error: error.message || error });
    } finally {
        await client.close();
    }
};


const updateExamResults = async (req, res) => {
  try {
    await client.connect();

    const { studentId, examId, score, feedback, answers } = req.body;
    console.log('Request body:', req.body); // Debugging

    const StudentCollection = client.db(db_name).collection('students');

    // Fetch student
    const student = await StudentCollection.findOne({ studentId });
    if (!student) {
      return res.status(404).send({ message: 'Student not found.' });
    }

    // Check if the results entry for the specific examId already exists
    const resultIndex = student.results.findIndex(result => result.examId === examId);
    if (resultIndex !== -1) {
      // Update the existing result
      const result = await StudentCollection.updateOne(
        { studentId, "results.examId": examId },
        {
          $set: {
            [`results.$.score`]: score,
            [`results.$.feedback`]: feedback,
            [`results.$.answers`]: answers,
          }
        }
      );

      if (result.modifiedCount === 0) {
        return res.status(400).send({ message: 'No changes made to the results.' });
      }

      return res.status(200).send({ message: 'Results updated successfully!' });
    } else {
      // Create new result entry
      const newResult = {
        examId: examId || 'defaultExamId',  // Ensure examId is not null
        score: score || 0,  // Default score to 0 if null
        feedback: feedback || 'No feedback',  // Ensure feedback is not null
        answers: answers || [],  // Default answers to empty array if null
      };

      await StudentCollection.updateOne(
        { studentId },
        { $push: { results: newResult } }  // Add new result
      );

      return res.status(201).send({ message: 'Results created successfully!' });
    }
  } catch (error) {
    console.error('Error updating exam results:', error.message);
    res.status(500).send({ message: 'Error updating exam results', error: error.message || error });
  } finally {
    await client.close();
  }
};


const getExamResults = async (req, res) => {
  try {
    await client.connect();
    
    const { studentId } = req.body;
    console.log('Received studentId:', studentId); // Debugging

    const StudentCollection = client.db(db_name).collection('students');
    
    // Fetch the student's results
    const student = await StudentCollection.findOne(
      { studentId },
      { projection: { results: 1 } } // Only return the results field
    );
    
    console.log('Fetched student:', student); // Debugging
    
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }
    
    if (!student.results || student.results.length === 0) {
      return res.status(404).send({ message: 'No exam results found for this student' });
    }
    
    res.status(200).send({ results: student.results });
  } catch (error) {
    console.error('Error fetching exam results:', error.message);
    res.status(500).send({ message: 'Error fetching exam results', error: error.message || error });
  } finally {
    await client.close();
  }
};






const enrollInExam = async (req, res) => {
    try {
        await client.connect();
        const StudentCollection = client.db(db_name).collection('students');
        const ExamCollection = client.db(db_name).collection('exam');

        const {  email, examId, title} = req.body; // Use req.body instead of req.params

        // Check if the exam exists
        const exam = await ExamCollection.findOne({ examId }); // Check using the examId as a string
        if (!exam) return res.status(404).send({ message: 'Exam not found' });

        const student = await StudentCollection.findOne({ email });
        if (!student) {
            return res.status(404).send({ message: 'Student not found' });
        }

        // Enroll student in the exam
        const updatedStudent = await StudentCollection.findOneAndUpdate(
            { email },
            { $addToSet: { enrolledExams: { examId, title, dateEnrolled: new Date() } } },
            { returnDocument: 'after' }
        );
        console.log("Updated Student:", updatedStudent);
        if (!updatedStudent) {
            return res.status(404).send({ message: 'Student not found' });
        }

        res.status(200).send({ message: 'Successfully enrolled in exam', student: updatedStudent.value });
    } catch (error) {
        console.error('Error enrolling in exam:', error.message);
        res.status(500).send({ message: 'Error enrolling in exam', error: error.message || error });
    } finally {
        await client.close();
    }
};

  


export default{
    createStudent,
    loginStudent,
    enrollInExam,
    takeExam,
    updateExamResults,
    getExamResults
}
