// const MongoClient = require("mongodb").MongoClient;
const {MongoClient} = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database) ;
    return db.collection("products");
}

// This is by promise method
// dbConnect().then((collection)=>{
//     let data = collection.find().toArray();
//     data.then((item)=>{
//         console.log(item);
//     })
// })

// By await and async method
const main = async ()=>{
    let collection = await dbConnect();
    let data = await collection.find().toArray();
    console.log(data);
}

main();