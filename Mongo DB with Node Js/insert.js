const {MongoClient} = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("products");
}

const insert = async ()=>{
    let collection = await dbConnect();
    const data = await collection.insertOne(
        {
            name:"V 41",
            price : 19999,
            category : "Mobile",
            brand:"Vivo"
        }
    )
}

insert();

// To insert many objects use insertMany function and pass array of objects