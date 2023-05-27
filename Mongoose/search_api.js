const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const app = new express();

mongoose.connect("mongodb://127.0.0.1:27017/web");
var productSchema = new mongoose.Schema({name : String , price: Number , brand : String , 
    category : String});

app.get("/search/:key" ,async (req , res)=>{
    let productModel = mongoose.model("products" , productSchema) ;

    let data = await productModel.find({
        "$or" : [
            {"name" : {$regex:req.params.key}},
            {"brand" : {$regex:req.params.key}}
        ]
    });

    res.send(data);
})

app.listen(3000);