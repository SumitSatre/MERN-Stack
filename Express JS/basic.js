const express = require('express');

const app = express();

app.get('' , (req , res)=>{
    res.send(`
    <h1> Welcome , This is home page</h1>
    <a href="/about" style="display:block">About page</a>
    <a href="/help">Help Page</a>`
    );
})

app.get('/about' , (req , res)=>{
    res.send(`
    <h1> Welcome , This is about page ${req.query.name}</h1>
    <input type="text" placeholder="Enter name" value="${req.query.name}"/>
    `);
})

app.get('/help' , (req , res)=>{
    res.send(`
    <h1> Welcome , This is help page</h1>
    `);
})

app.listen(3000);