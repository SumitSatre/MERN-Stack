import express from "express";

const app = express();

app.get("/" , (req , res)=>{
    res.status(200);
    res.json({success : true , message: req.originalUrl});
})

app.listen(3000 , ()=>{
    console.log(`Server is working at http://localhost:3000/`);
});