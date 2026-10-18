import mongoose from "mongoose";


const connectDb = async () => {
    try {
        let mongoConnect = await mongoose.connect(`${process.env.Mongo_Url}`)
        console.log("MongoDb connected successfully")
    }
    catch (err) {
        console.log("db not connected ", err)
    }
}

export default connectDb