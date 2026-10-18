import express from "express"
// import addpost from "../controllers/auth.controller.js"
import authMiddleware from "../middlewares/user.middlewares.js";

const router = express.Router();

// router.post("/add-post", authMiddleware, addpost);

export default router;