import userModel from "../models/user.model.js";
import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword)
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Register successfull!",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const isUser = await userModel.findOne({ email })
        if (!isUser) {
            return res.status(404).json({
                message: "user not found with this email",
                success: false
            })
        }
        const comparePassword = await bcrypt.compare(password, isUser.password)

        if (!comparePassword) {
            return res.status(400).json({
                message: "User email and password is incorrect!"
            })
        }
        const token = jwt.sign({
            id: isUser._id,
        }, "skhgaskldfgalksdflaksdfjh", { expiresIn: '1d' })


        res.status(200).json({
            message: "User logged in succesfully",
            user: isUser,
            token
        })


    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
}