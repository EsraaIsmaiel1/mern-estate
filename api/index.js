import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log('connected to Mongo server');
  })
  .catch((err) => console.log('error connecting to Mongo server', err));
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('listening on 3000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
