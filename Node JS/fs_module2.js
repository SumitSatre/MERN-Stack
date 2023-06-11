const fs = require ("fs");

let text = fs.readFile("D:/Sumit/Web Development/Web Dev Pgm/MERN2/Node JS/get2.txt" , "utf-8",
(error , data)=>{
    console.warn(error , data);
}) ;

console.log(text);