const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/" , (req,res)=>{
    res.json({message : "This is simple API"})
})

app.post("/login" , (req , res)=>{
    const user = {
        "id" : 1,
        "name" : "sumit",
        "email" : "abc@xyz.com"
    }
})

app.listen(3000);