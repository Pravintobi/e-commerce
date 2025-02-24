import { MongoClient } from 'mongodb';
import 'dotenv/config';
import{v4 as uuid} from "uuid"
import QuestionBank from '../Model/model.js'; // Assuming your model is here
import Exam from '../Model/model.js'; // Import the Exam model


// Load environment variables for MongoDB connection
const db_url = process.env.DB_URL;
const db_name = process.env.DB_NAME;

// Initialize MongoDB Client
const client = new MongoClient(db_url);

// Create a true/false question
const createTrueFalseQuestion = async (req, res) => {
  try {
    // Connect to the MongoDB client
    await client.connect();
    // const examID = uuid();

    // Access the appropriate database and collection
    const QuestionCollection = client.db(db_name).collection('Question');
    const questionID = uuid()
    // Get the data from the request body
    const { questionType, questionText, difficultyLevel, topic, examType, category } = req.body;

    // Create a new question object using the Mongoose model
    const question ={
      questionID,
      questionType,
      questionText,
      difficultyLevel,
      topic,
      examType,  // should be true or false
      category
    }

   
    const result = await QuestionCollection.insertOne(question);

    
    res.status(201).json({
      message: ' question created successfully',
      question: result,
    });

  } catch (error) {
    
    res.status(500).json({ message: 'Error creating  question', error });
  } finally {
    
    await client.close();
  }
};




const getCategorizedQuestions = async (req, res) => {
  try {
    await client.connect();
    
    const QuestionCollection = client.db(db_name).collection('Question');
    
    // Get query parameters from the request
    const { topic, difficultyLevel, questionType } = req.body;
    
    // Build the query object
    const query = {};
    
    if (topic) query.topic = topic.toLowerCase(); // Assuming topic in DB is stored in lowercase
    if (difficultyLevel) query.difficultyLevel = difficultyLevel.toLowerCase(); // Normalize difficulty level
    if (questionType) query.questionType = questionType.toLowerCase(); // Normalize question type

    
    // Find the questions based on the query
    const questions = await QuestionCollection.find(query).toArray();
    
    res.status(200).json(questions);
    
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error });
  } finally {
    await client.close();
  }
};



export const createExam = async (req, res) => {
  try {
    
    await client.connect();

    
    const examCollection = client.db(db_name).collection('exam');
    const examId = uuid();
    // Get the data from the request body
    const { examTitle, examDate, examTime, duration, timeLimitPerQuestion, totalTimeLimit } = req.body;
    console.log("Request Body:", req.body); // Log request body

    // Create a new exam object
    const newExam = {
      examId,
      examTitle,
      examDate,
      examTime,
      duration,
      timeLimitPerQuestion,  
      totalTimeLimit,        
      createdAt: new Date() 
    };

    
    const result = await examCollection.insertOne(newExam);

   
    res.status(201).send({
      message: 'Exam created successfully',
      exam: { id: result.insertedId, ...newExam }, 
    });
  } catch (error) {
    // Handle any errors
    console.error("Error creating exam:", error); 
    res.status(500).send({ message: 'Error creating exam', error });
  } finally {
    
    await client.close();
  }
};


const getExams = async (req, res) => {
  try {
    const exams = await Exam.find();  
    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exams', error });
  }
};

export default {

  createTrueFalseQuestion,
  getCategorizedQuestions,
  createExam,
  getExams

}