const path = require ("path");
const express = require ("express");
const fs = require("fs");
const { error } = require("console");

const app = new express();

const dirPath = path.join(__dirname + "/files2");
console.log(dirPath);  // d:\Sumit\Web Development\Web Dev Pgm\MERN2\Node JS\files2
console.log(__filename);

// for(let i = 1 ; i<=10 ; i++){
//     fs.writeFileSync(dirPath + `/sumit${i}` , `This is file number ${i}`);
// }

fs.readdir(dirPath , "utf-8" , (error , files)=>{
    console.warn(error);
    console.warn(files);

    files.map((item , index)=>{

        console.log( fs.readFileSync(dirPath + `/sumit${index+1}` , "utf-8") );
    })
})

app.listen(5000 , ()=>{
    console.log("App is running at http://localhost:5000/");
});