import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config()

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB).then(()=>console.log("connected to mongodb")).catch(error=>console.log(error));

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
