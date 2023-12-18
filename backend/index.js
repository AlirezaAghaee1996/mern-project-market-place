import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
dotenv.config();
mongoose
  .connect(process.env.DATABASE_ADDRESS)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json())
app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)

app.listen(3000, () => {
  console.log("server start");
});
