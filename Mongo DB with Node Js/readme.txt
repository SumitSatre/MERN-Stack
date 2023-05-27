// View all Databases
show dbs

// Create a new or switch database
use database_name

// View current databse
db

// Delete database
db.dropDatabase()

// To view collection in database
show collections

// To create a new collection in database
db.createCollection("collection_name")

// To delete Collection (collection_name to delete)
db.collection_name.drop()


/* Commands for rows */

// Insert one row
db.collection_name.insertOne({"name" : "Sumit",
"Age" : 19 , "Language" : "Javascript"})

// Insert many row  : Pass The array of objects
db.collection_name.insertMany([
    {"name" : "Sumit","Age" : 19 , "Language" : "Javascript"},
    {"name" : "Saurabh","Age" : 21 , "Language" : "C"},
    {"name" : "Akash","Age" : 16 , "Language" : "C++"},
])

// show all rows in a collection
db.collection_name.find()

// search in the mongodb
db.collection_name.find({name : "Sumit"})

// Only three rows will be shown
db.collection_name.find().limit(3)

// Only find first matching row in collection
db.collection_name.findOne({name : "Sumit"})

// Count the number of rows in the collection
db.collection_name.find().count()

// Count how many rows have name sumit
 db.collection_name.find({name : "Sumit"}).count()

// Sort rows in ascending order
  db.collection_name.find().sort({Age : 1})

// Sort rows in descending order
db.collection_name.find().sort({Age : -1})

// Update a row
db.collection_name.updateOne({name : "Sumit"} ,{$set : {Age : 24}})

// Update many row
// $inc (increment) operator
db.collection_name.updateMany({name : "Sumit"} ,{$inc : {Age : 24}})

// if it cant find the data then it is as row added to collection {upsert : true} 
db.collection_name.updateOne({name : "Shubham"} ,{$set : {Age : 34}} , {upsert : true})

// $rename (Rename) operator
db.collection_name.updateOne({name : "Sumit"} ,{$rename : {Language : "Coding_language"}})

// To delete a row
db.collection_name.removeOne({name : "Sumit"})

// To delete Many row
db.collection_name.removeMany({name : "Sumit"})