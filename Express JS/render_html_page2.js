const express = require("express");
const path = require("path");

const app = express();
const filePath = path.join(__dirname , "public");

app.get('/' , (req , res)=>{
    res.sendFile(`${filePath}/index.html`);
})

app.get('/about' , (req , res)=>{
    res.sendFile(`${filePath}/about.html`);
})

app.get('/contact' , (req , res)=>{
    res.sendFile(`${filePath}/contact.html`);
})

// This is the method to create a 404 page 
app.get('*' , (req , res)=>{
    res.sendFile(`${filePath}/notvalid.html`);
})

app.listen(3000);