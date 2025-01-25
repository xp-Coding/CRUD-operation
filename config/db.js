import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const db = process.env.DB_URI

const connectDB = mongoose.connect("mongodb://localhost:27017/crud2")
.then(console.log("database connected"))
.catch((err)=>{
    console.log(err);  
})

export default connectDB;