import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reviews: [
        {
            name: String,
            id: String,
            review: String,
            rating: Number
        }
    ],
    productImages: [
        {
            image: String
        }
    ],
    category: {
        type: String,
    },
    stocks: {
        type: Number,
    },
})

const productModel = mongoose.model("product", productSchema)

export default productModel