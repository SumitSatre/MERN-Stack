const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://127.0.0.1:27017/yash");

var productSchema = new mongoose.Schema({name : String , price: Number , brand : String , 
    category : String});


const saveInDb = async ()=>{

    // Using schema model connects the mongoose to the node js
    const productModel = mongoose.model("products" , productSchema);

    let data = new productModel({name : "a1" , price : 9999 , brand : "Vivo" , category : "mobile"});
    let result = await data.save();
    console.log(result);
}

// saveInDb();

const updateInDb = async ()=>{
    const productModel = mongoose.model("products" , productSchema);

    let data = await productModel.updateOne(
        {name : "Saurabh"},
        {$set : {name : "S20"}}
    );

    console.warn(data);
}

updateInDb();

const deleteInDb = async ()=>{
    const productModel = mongoose.model("products" , productSchema);

    let data = await productModel.deleteOne({name : "S20"}
    );

    console.warn(data);
}

//deleteInDb();

const findInDb = async ()=>{
    const productModel = mongoose.model("products" , productSchema);

    let data = await productModel.find({name : "S20"}
    );

    console.warn(data);
}

// findInDb();