const mongoose = require("mongoose");
const mongodb = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const app = new express();

mongoose.connect("mongodb://127.0.0.1:27017/web");

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());

var productSchema = new mongoose.Schema({
    name : String,
    description : String,
    price : Number 
})

const items = mongoose.model("items" , productSchema);

app.post("/product" , async (req , res)=>{
    res.status(200);

    const product = await items.create(req.body);
})


app.listen(5000);