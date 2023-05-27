const fs = require("fs");
const path = require("path");

let dirPATH = path.join(__dirname , "files");

// This is used to create 5 files in folder (files)
// for(let i = 0 ; i<5 ; i++){
//     fs.writeFileSync(dirPATH + `/hello${i+1}` , `This is file number ${i+1}`)
// }

fs.readdir(dirPATH , (err , val)=>{
    console.log(err);
    console.log(val);

    val.forEach((item)=>{
        console.log("This is file" , item);

        let filePATH = path.join(dirPATH , `/${item}`);
        
        console.log("data : ", fs.readFileSync(filePATH , "utf-8") , "\n");
    })
})