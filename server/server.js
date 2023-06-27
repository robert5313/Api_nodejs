require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/ProductModel");


const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
//Routes
app.get("/", (req, res) => {
    res.send("Hello world");
})

//GET ALL PRODUCTS FROM THE DATABASE
app.get("/products", async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
   7 } catch(error) {
    res.status(500).json({message: error.message})
   }
      });

      //GET A SINGLE PRODUCT FROM THE DATABASE BY ID
app.get("/products/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    })

    //CREATE A PRODUCT TO THE DATABASE
app.post("/products", async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    };
});

//UPDATE A PRODUCT TO THE DATABASE
app.put("/products/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
});

//DELETE A PRODUCT FROM THE DATABASE
app.delete("/products/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndRemove(id);

        if(!product) {
            return res.status(404).json({message: "The product with the given ${id} is not found"});

        }
        const deleteProduct = await Product.findById(id);
        res.status(200).json(deleteProduct);
    
    } catch(error) {
            res.status(500).json({message: error.message});
        }
});


//app.listen(port, () => {
  //  console.log(`Server is running on port ${port}`)
//})

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
    console.log("Database connected successfully")
}).catch((error) => {
    console.log(error)
});