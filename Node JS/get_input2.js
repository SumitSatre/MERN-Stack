const fs = require("fs");

const input = process.argv;

/* process.args is a array its elements are [node get_input2.js create get2.txt "My name is Sumit"] this 
command */

if(input[2] == "create"){
    fs.writeFileSync(input[3] , input[4]);
}
else if(input[2] === "remove"){
    fs.unlinkSync(input[3]);
}
else if(input[2] === "add"){
    fs.appendFileSync(input[3] , input[4]);
}
else{
    console.log("Invalid Input Theek se daal bhai!!");
}

// input[2] is the condition string i.e create , remove , add
// input[3] file name (apple.txt)
// input[4] This is string to append , write

/* 
for add
node get_input2.js add get2.txt "My name is Sumit"

remove
node get_input2.js remove get2.txt

create
node get_input2.js create get2.txt "My name is Sumit"
*/