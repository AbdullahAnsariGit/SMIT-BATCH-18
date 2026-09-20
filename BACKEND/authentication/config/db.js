import mongoose from "mongoose";


export const handleDBConnection = async () => {
    let successMsg = "DB is connected";
    let errorMsg = "DB is not connected";
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(successMsg)
    } catch (err) {
        console.log(`${errorMsg}: ${err}`)

    }
}