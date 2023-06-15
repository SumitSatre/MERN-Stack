import express from "express";

const app = express();

import ErrorHandler from "./errorHandler.js";

app.get("/" , (req , res , next)=>{

    let age = 15;

    
    if(age<18){
        // This is not good practice to write all this code in our program it becomes lengthy
        // const err = new Error("You cannot vote");
        // err.statusCode = 400;  // Bad request
        // return next(err);

        return next(new ErrorHandler("You cannot vote" , 400));
    } 

    res.status(200);
    res.json({success : true , message: "You can vote"});
})

app.listen(3000 , ()=>{
    console.log(`Server is working at http://localhost:3000/`);
});

app.use((err , req , res , next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";

    res.status(err.statusCode);
    res.json({
        success : false,
        message : err.message,
        statusCode : err.statusCode                
    })
})