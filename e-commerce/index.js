import Express from 'express';
import approutes from './backend/routes/routeindex.js';
import cors from 'cors';  // Import CORS
import 'dotenv/config';

const PORT = process.env.PORT;
const app = Express();

// Allow all origins
app.use(cors({ origin: "*", credentials: true }));

app.use(Express.json());
app.use(approutes);

app.listen(PORT, () => console.log("Listening on port " + PORT));
