import mongoose from "mongoose";

export const dbconnection = async () => {
    try {
        await mongoose.connect(`${process.env.Mongo_Url}`)
        console.log('DB is connected')
    }
    catch (err) {
        console.log('Error: DB not connected')
    }
}