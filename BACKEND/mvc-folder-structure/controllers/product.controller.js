import productModel from "../models/product.model.js"

export const addProduct = async (req, res) => {
    try {
        const body = req.body

        const product = await productModel.create(body)

        res.status(201).json({
            message: "product created successfully!",
            success: true,
            product
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating product"
        })
    }
}

export const filterProduct = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query

        // if (!page || !limit) {
        //     res.status(404).json({
        //         success: false,
        //         message: "missing query params"
        //     })
        // }
        const products = await productModel.find({})

        const total = products.length
        // 100 / 10 = 10
        const totalPages = Math.ceil(total / limit);
        //  1 - 1 = 0 * 10 NOTHING to skip
        //  2 - 1 = 1 * 10 10 to skip
        const skip = (page - 1) * limit;
        //    if page =1 (0, 10)
        //   if page = 2 (10, 20)
        // if    so on......
        const result = products.slice(skip, skip + limit)

        res.status(200).json({
            success: true,
            data: result,
            pageNo: page,
            limit,
        })



    } catch (error) {
        res.status(500).json({
            message: "Error creating product"
        })
    }
}