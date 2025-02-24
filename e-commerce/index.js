import express from 'express';
import cors from 'cors';
import approutes from './backend/routes/routeindex.js';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const app = express();

// Define allowed origins
const allowedOrigins = [
  'http://localhost:5173', // Vite default development server
  'https://stirring-sprite-c725cf.netlify.app' // Your Netlify deployed site
];

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable if your requests include credentials
};

// Apply CORS middleware
app.use(cors(corsOptions));

app.use(express.json());
app.use(approutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));