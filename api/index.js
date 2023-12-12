import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log('connected to Mongo server');
  })
  .catch((err) => console.log('error connecting to Mongo server', err));
const app = express();

app.listen(3000, () => {
  console.log('listening on 3000');
});

app.use('/api/user', userRouter);
