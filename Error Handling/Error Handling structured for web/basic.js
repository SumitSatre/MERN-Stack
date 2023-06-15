import express from "express";

const app = express();

class ErrorHandlers extends Error{
    constructor(message , statusCode){
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this , this.constructor);
    }
}

app.get("/" , (req , res , next)=>{
    console.log("A");
    next(new ErrorHandlers("Custom error"));
})

app.use((err, req, res, next) => {
    console.log("working middleware");
    res.status(404);
    res.json({"message": err.message});
});


app.listen(3000 , ()=>{
    console.warn("sever in working");
});