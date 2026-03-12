const express = require("express")
const router = express.Router()

const Product = require("../Models/product")

router.get("/", async (req,res)=>{
    const products = await Product.find()
    res.json(products)
})

router.post("/", async (req,res)=>{

    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        image:req.body.image
    })

    await product.save()

    res.json(product)
})

module.exports = router