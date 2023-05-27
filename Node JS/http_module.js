// In node js it handles server requests and responce

const http = require("http");

http.createServer((req , res)=>{
    res.writeHead(200 , ("Content-Tpye" , "text/html"));
    res.write("<h1>Hi I am Saurabh.</h1>");
    res.end();
}).listen(3000);

