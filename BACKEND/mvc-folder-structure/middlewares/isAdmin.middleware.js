import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
const isAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Token is required!",
            });
        }

        const token = authHeader.split(" ")[1];
        console.log(token)
        const decoded = jwt.verify(token, "skhgaskldfgalksdflaksdfjh");

        const user = await userModel.findOne({ _id: decoded.id })
        console.log(user)
        if (user.role != "admin") {
            res.status(401).json({
                message: "you are not an admin!"
            })
            return
        }
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
}

export default isAdmin