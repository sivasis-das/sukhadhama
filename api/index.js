import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config()

const app = express();
const port = 3000;



mongoose.connect(process.env.MONGODB).then(()=>console.log("connected to mongodb")).catch(error=>console.log(error));

app.use(express.json())

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


// express.js error handler 
app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})


app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
