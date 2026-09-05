import express from "express"
import dotenv from "dotenv"
import { dbconnection } from "./db/index.js"
import mongoose, { Schema } from "mongoose"
dotenv.config()

const app = express()
app.use(express.json())
dbconnection()
const PORT = 3001




app.post("/add-todo", async (req, res) => {
    const { title, isCompleted = false } = req.body;
    console.log("title iscomplted", title, isCompleted)
    if (!title) {

        res.json({
            status: false,
            message: "Title is required!"
        })
        return
    }

    const UserModel = mongoose.model('User', 
    new Schema({
         title: String,
          isCompleted: Boolean
         }));

    // You can use a Model to create new documents using `new`:
    const userDoc = new UserModel({ title: title, isCompleted: isCompleted });
    await userDoc.save();

    res.json({
        status: true,
        message: "Data created success"
    })

})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})