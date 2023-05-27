const {MongoClient} = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection("products");
}

const deleteOne = async ()=>{
    let collection = await dbConnect();
    let data = await collection.deleteOne({name:"V 41"});
    if(data.acknowledged){
        console.log("Deleted Successfully");
    }
    if(!data.deletedCount){
        console.log("Data is not present in Database");
    }
}

deleteOne();


const deleteMany = async ()=>{
    let collection = await dbConnect();
    let data = await collection.deleteMany({name:"V 41"});
}
