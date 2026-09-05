import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDB from "./config/db.connect.js"


const app = express()
const PORT = 4000
connectDB()
app.listen(PORT, () => {
    console.log("Server is running on PORT :" + PORT)
})