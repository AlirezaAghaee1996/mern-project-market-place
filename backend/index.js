import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
mongoose
  .connect(process.env.DATABASE_ADDRESS)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("server start");
});
