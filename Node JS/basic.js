let val = require("./app.js");

console.log(val[0].x);
console.log(val[0].fun());

console.log(val[1].y);
console.log(val[1].fun());

let arr = [1,51,5,6,23,59,53,45,8,3,7];

let a = arr.filter((num)=>{
    return num>=5;
}) 

console.log(a);