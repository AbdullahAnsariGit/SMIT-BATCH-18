// import http from "http"
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     if (req.url == '/') {
//         res.end("Saylani")
//     }
//     if (req.url == "/product") {
//         res.end(`${JSON.stringify(data)}`)
//     }

// });

// // Start the server and listen on port 3000
// server.listen(PORT, () => {
//     console.log(`Server running at ${PORT}`);
// });

// CRUD -> CREATE   READ   UPDATE     DELETE
///       POST      GET   PUT/PATCH  delete
// example:
// http.createServer((req, res) => {
//     if(req.url = "/", req.method == "GET"){

//     }
// }) 

import express from "express";
import data from './product.json' with { type: 'json' };

const app = express()
app.use(express.json())
const PORT = 3000;
const products = [
    {
        id: "PROD-001",
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        brand: "SoundMax",
        price: 79.99,
        currency: "USD",
        stock: 125,
        sku: "SM-WH-001",
        rating: 4.5,
        availability: true
    },
    {
        id: "PROD-002",
        name: "Smart Watch Pro",
        category: "Wearables",
        brand: "TechTime",
        price: 129.99,
        currency: "USD",
        stock: 80,
        sku: "TT-SW-002",
        rating: 4.4,
        availability: true
    },
    {
        id: "PROD-003",
        name: "Portable Bluetooth Speaker",
        category: "Electronics",
        brand: "AudioBeat",
        price: 49.99,
        currency: "USD",
        stock: 200,
        sku: "AB-BS-003",
        rating: 4.6,
        availability: true
    },
    {
        id: "PROD-004",
        name: "Mechanical Gaming Keyboard",
        category: "Computer Accessories",
        brand: "GamePro",
        price: 89.99,
        currency: "USD",
        stock: 65,
        sku: "GP-KB-004",
        rating: 4.7,
        availability: true
    },
    {
        id: "PROD-005",
        name: "Wireless Gaming Mouse",
        category: "Computer Accessories",
        brand: "GamePro",
        price: 59.99,
        currency: "USD",
        stock: 110,
        sku: "GP-GM-005",
        rating: 4.5,
        availability: true
    },
    {
        id: "PROD-006",
        name: "USB-C Fast Charger",
        category: "Mobile Accessories",
        brand: "PowerPlus",
        price: 24.99,
        currency: "USD",
        stock: 300,
        sku: "PP-FC-006",
        rating: 4.3,
        availability: true
    },
    {
        id: "PROD-007",
        name: "Laptop Backpack",
        category: "Bags",
        brand: "TravelGear",
        price: 44.99,
        currency: "USD",
        stock: 95,
        sku: "TG-LB-007",
        rating: 4.6,
        availability: true
    },
    {
        id: "PROD-008",
        name: "Stainless Steel Water Bottle",
        category: "Home & Lifestyle",
        brand: "EcoLife",
        price: 19.99,
        currency: "USD",
        stock: 250,
        sku: "EL-WB-008",
        rating: 4.8,
        availability: true
    },
    {
        id: "PROD-009",
        name: "LED Desk Lamp",
        category: "Home & Office",
        brand: "BrightHome",
        price: 34.99,
        currency: "USD",
        stock: 75,
        sku: "BH-DL-009",
        rating: 4.4,
        availability: true
    },
    {
        id: "PROD-010",
        name: "Ergonomic Office Chair",
        category: "Furniture",
        brand: "ComfortSeat",
        price: 199.99,
        currency: "USD",
        stock: 40,
        sku: "CS-OC-010",
        rating: 4.7,
        availability: true
    }
];


app.get("/", (request, response) => {
    response.status(200).json({ message: "Data fetched successfully", success: true, data: products })
})


app.post('/add-product', (req, res) => {
    console.log(req.body)
    products.push(req.body)
    res.json({
        message: 'Product created successfully',
        status: true,
    })
})
app.put('/update-product', (req, res) => {
    console.log(req.body)
    products.push(req.body)
    res.json({
        message: 'Product created successfully',
        status: true,
    })
})

app.listen(PORT, () => {
    console.log("Server is running on " + PORT)
})
