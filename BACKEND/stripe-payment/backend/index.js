import express from "express"
import Stripe from "stripe"
import cors from "cors"

const stripe = new Stripe('sk_test_51OEU4xIlkUVaCxOFk3OOjelWz1Pgfd9z9A8Ttzg37E0YWiuuiC6mqzAzgCN25z9UvofJwygKl8mthjsdlgoo5Oxb00CpnrIiU5');
const app = express()
const PORT = 4000
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"]
}))


app.post("/payment-intent", async (req, res) => {
    const { product_price, product_name, product_id, product_image } = req.body
    // Validation
    if (!product_price || !product_name || !product_id || !product_image) {
        res.status(400).json({
            message: "all feilds are required!",
            success: false
        })
        return
    }
    if (typeof product_price !== "number") {
        return res.status(400).json({
            message: "Product price must be a number!",
            success: false
        });
    }

    if (typeof product_id !== "number") {
        return res.status(400).json({
            message: "Product ID must be a number!",
            success: false
        });
    }
    // Create payment intent stripe
    const paymentIntent = await stripe.paymentIntents.create({
        amount: product_price,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.status(200).json({
        success: true,
        message: "Payment intent succesfully created!",
        client_secret: paymentIntent.client_secret,
        payment_id: paymentIntent.id
    })
})


app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
})