import express from "express"

const app = express()
const PORT = 4000

app.use(express.json())

let products = []

// get 
app.get("/", (req, res) => {
    const query = req.query
    console.log(query)
    res.json({
        data: products,
        message: "data feteched successfully",
        success: true
    })
})

// post
app.post("/create-product", (req, res) => {
    let body = req.body
    products.push(body)
    res.json({
        message: "data created succesfully",
        success: true
    })
})

// get single data

app.get("/single-product/:id", (req, res) => {
    const id = req.params.id
    const filteredAray = products.filter((i) => i.id == id)
    console.log(filteredAray)
    res.json({
        data: filteredAray,
        message: "single product feteched succesfully",
        success: true
    })
})


// update product

app.put("/update-product/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const product = products.find((item) => item.id == id);
    product.name = name;

    res.status(200).json({
        message: "Product updated successfully",
        product
    });
})

// delete


app.delete("/delete-product/:id", (req, res) => {
    let { id } = req.query

    let data = products.filter((item) => item.id != id)
    products = data
    res.json({
        message: "Delete Successfully!",
        success: true,
        data: products
    })
})






app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})

