import "dotenv/config"
console.log(process.env.CLOUDINARY_CLOUD_NAME)
import express from "express"
import multer from "multer"
import path from "path"
import cloudinary from "./config/cloudinary.js"

const PORT = 4000
const hamza = express()
hamza.use(express.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,

    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

hamza.get("/health", (req, res) => {
    res.send(`
    <div>
        <h1 onclick="alert('working')" style="color:red;">Hello World</h1>
    </div>
    `);
})


hamza.post("/image-upload", upload.single("file"), async (req, res) => {
    console.log();
    console.log(req.body);
    let file = await cloudinary.uploader.upload(req.file)
    console.log(file)
    res.json({
        message: "File uploaded successfully",
        file: req.file
    });
})



hamza.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})