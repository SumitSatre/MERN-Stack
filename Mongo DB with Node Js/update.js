const {MongoClient} = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("products");
}

const updateOne = async ()=>{
    let collection = await dbConnect();
    const data = await collection.updateOne(
        {name:"V 41"} , {$set : {price:20333}}
        );
}

updateOne();


const updateMany = async ()=>{
    let collection = await dbConnect();
    const data = await collection.updateMany(
        {name:"V 41"} , {$set : {price:20100}}
        );
}
