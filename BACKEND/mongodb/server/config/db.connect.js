import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.ADMIN_USER}:${process.env.ADMIN_USER_PASSWORD}@cluster0.mqseu4l.mongodb.net/?appName=Cluster0`);
        console.log("Database Connected!")
    } catch (error) {
        console.log('not connected', error)
    }
}

export default connectDB