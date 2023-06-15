const http = require('http');
const data = require ("./data");

const app = http.createServer((req , res)=>{
    res.writeHead(200 , ("Content-Tpye" , "text/html"));
    res.write("<h1> My name is Sumit </h1> <p> I am learning web dev from YouTube </p>");
    res.write("<span> Ok do you understand </span>");
    res.write(JSON.stringify(data));
    res.end();
})

app.listen(3000);