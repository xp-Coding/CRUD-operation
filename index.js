import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import router from "./router/userRouter.js"

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(express.json())


app.use("/api", router)




connectDB
app.listen(port, ()=>{
    console.log(`server is running on  ${port}`);
})