const express = require("express");
const mongodb = require("mongodb");
const dbconnect = require("./mongodb.js");

const app = new express();
app.use(express.json());

// In get method we cannot send body
// It is used to read data from database
app.get("/" , async (req , res)=>{
    const collection = await dbconnect();
    const data = await collection.find().toArray();
    
    res.send(data);
})

// If want to save data in the database
app.post("/" , async (req , res)=>{
    console.log(req.body);
    res.send(req.body);

    const collection = await dbconnect();
    const data = await collection.insertOne(req.body);
})

// If want to Update data in the database
app.put("/" , async (req , res)=>{
    console.log(req.body);

    const collection = await dbconnect();
    const data = await collection.updateOne(
        {"name": req.body.name } , 
        {$set :req.body}
        );
    res.send(req.body);
})
/* {"name": "F31" ,"price": "98690"}
*/

app.delete("/:id" , async (req , res)=>{
    const collection = await dbconnect();
    const data = await collection.deleteOne({_id : new mongodb.ObjectId(req.params.id)});

    res.send(data);
})

app.listen(3000);
app.listen(5000);