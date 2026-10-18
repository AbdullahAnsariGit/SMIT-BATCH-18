import express from "express";
import authRoutes from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";
import dotenv from "dotenv"
import connectDb from "./config/db.js";
dotenv.config()

connectDb()

const app = express();

app.use(express.json());
app.use("/api/health", (req, res) => {
    res.status(201).send({
        message: `Server is running port ${5000}`,
        status: true
    })
})
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoute);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});