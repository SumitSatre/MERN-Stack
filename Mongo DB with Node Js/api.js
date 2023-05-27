const express = require("express");
const mongodb = require("mongodb");
const dbConnect = require("./mongodb.js");

const app = express();
app.use(express.json());


app.get("/", async (req, res) => {
    let collection = await dbConnect();
    let data = await collection.find().toArray();
    console.log(data);
    
    res.send(data);
})

/* POST is a request method supported by HTTP used by the World Wide Web. The HTTP POST method sends data to the server. */
app.post("/", async (req, res) => {
    let collection = await dbConnect();
    let data = await collection.insertOne(req.body);

    res.send("Insertion SuccessFul");
})

app.put("/" , async (req , res)=>{
    let c = await dbConnect();
    const d = await c.updateOne(
        {brand :"Vivo"} , {$set : {price:20444}}
        );

    res.send("Updated SuccessFul");
})

app.delete("/:id" , async (req , res)=>{
    console.log(req.params.id);
    let collection = await dbConnect();
    let data = await collection.deleteOne({'_id' : new mongodb.ObjectId(req.params.id)});

    res.send("Deleted Successfully");
})
app.listen(3000);