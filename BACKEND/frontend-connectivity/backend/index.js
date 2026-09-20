import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
let product = []
app.post("/add-product", (req, res) => {
    const { title, desc, price } = req.body
    product.push({ title, desc, price })
    res.json({
        status: true,
        data: product,
        message: 'Product created successfully!'
    })


})

app.listen(3000, () => {
    console.log("server is running on 3000")
})