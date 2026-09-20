import express from "express"
import dotenv from "dotenv"
import { handleDBConnection } from "./config/db.js"
import { validateSignup } from "./utils/index.js";
import { route } from "./endpoints/index.js";
import bcrypt from "bcrypt"
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
const PORT = 3001;
dotenv.config();
const app = express();
app.use(express.json());
handleDBConnection();

app.get(route.root.entry, (req, res) => {
    res.status(200).json({
        status: true,
        message: "Backend is running..."
    })
})
const UserModel = mongoose.model('Auth',
    new Schema({
        email: String,
        password: String,
        username: String
    }));
app.post(route.auth.signup, async (req, res) => {
    let { email, username, password, confirmPassword } = req.body;
    const errors = validateSignup({
        email,
        username,
        password,
        confirmPassword
    });

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    let hashPassword = await bcrypt.hash(password, 10)



    // You can use a Model to create new documents using `new`:
    const userDoc = new UserModel({ email: email, password: hashPassword, username: username });
    await userDoc.save();

    res.json({
        status: true,
        message: "User Signup Successfully!"
    })


})

app.post(route.auth.login, async (req, res) => {
    let { email, password } = req.body;
    let user = await UserModel.findOne({ email: email });
    console.log("User Modal:", user)
    
    if (!user) {
        res.status(401).json({
            status: 400,
            message: "Invalid Credentials!"
        })
    }
    let correctPassword = await bcrypt.compare(password, user?.password)

    console.log("Correct password", correctPassword)

    if (correctPassword) {
        var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({
            status: true,
            message: "Login successfully!",
            user: user,
            accessToken: token
        })
    } else {
        res.status(400).json({
            status: false,
            message: "Invalid Credientails",
        })
    }
})

app.listen(PORT, () => {
    let message = `Server is running on ${PORT}`
    console.log(message)
})
