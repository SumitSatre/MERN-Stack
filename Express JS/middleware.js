const express = require("express");
const path = require("path");
const app = express();

const reqFilter = (req,res,next)=>{

    // http://localhost:3000/about
    if(!req.query.age){
        res.send("Please , provide Age!!");
    }

    // http://localhost:3000/about?age=15
    else if(req.query.age < 18){
        res.send("You are Under Age , you cannot access this Webpage");
    }

    // http://localhost:3000/about?age=20
    else{
        next();
    }
}

// app.use(reqFilter);

// middleware is applied to single page
app.get('/' ,reqFilter, (req , res)=>{
    res.send(`<h1> Welcome , This is Home page</h1>`);
})

app.get('/about' , (req , res)=>{
    res.send(`<h1>This is about page</h1>`);
})

app.get('/help' , (req , res)=>{
    res.send(`<h1>This is help page</h1>`);
})

app.listen(3000);