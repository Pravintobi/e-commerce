import express from 'express';
import cors from 'cors';
import approutes from './backend/routes/routeindex.js';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const app = express();

// Enable CORS for all origins
app.use(cors());

app.use(express.json());
app.use(approutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
