import path from 'path';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Routes
import userRoutes from './routes/userRoutes.js';
import traitRoutes from './routes/traitRoutes.js';
import geneticRoutes from "./routes/geneticRoutes.js";





const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/traits', traitRoutes);
app.use('/api/crops', geneticRoutes);



app.get('/', (req, res) => {
  res.send('Server is ready');
})

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
