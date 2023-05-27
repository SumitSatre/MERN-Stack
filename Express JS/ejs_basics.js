const express = require("express");
const path = require("path");

const app = express();
const filePath = path.join(__dirname , "public");

app.set("view engine" , "ejs");

app.get("/" , (req , res)=>{
    res.render("home");
})

app.get("/profile" , (req ,res)=>{

    const user = {
        name:"Sumit satre",
        email : "sumit@winner.com",
        city : "Pune",
        skills : ["C" , "C++" , "java" , "Python" , "Dart" , "HTML" , "Css" , "Javascript"]
    }

    res.render("profile" , {user});
})

app.get("/login" , (req , res)=>{
    res.render("login");
})

// This is the method to create a 404 page 
app.get('*' , (req , res)=>{
    res.sendFile(`${filePath}/notvalid.html`);
})

app.listen(3000);