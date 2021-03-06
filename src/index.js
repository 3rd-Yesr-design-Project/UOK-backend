import express from 'express';
import route from './routes/index';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(route);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
