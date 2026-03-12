const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const authRoutes = require("./routes/auth")



const app = express()

app.use(cors())

app.use(express.json());
app.use("/auth",authRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")

const productRoutes = require("./routes/products")
app.use("/products", productRoutes)

app.listen(5000, () => {
    console.log("Server running on port 5000")
})