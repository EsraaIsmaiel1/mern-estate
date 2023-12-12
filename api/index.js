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
