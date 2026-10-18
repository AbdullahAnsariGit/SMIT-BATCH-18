import express from "express"
import { addProduct, filterProduct } from "../controllers/product.controller.js"
import isAdmin from "../middlewares/isAdmin.middleware.js";
const router = express.Router();

router.post("/add", addProduct)
router.get("/", filterProduct)


export default router;