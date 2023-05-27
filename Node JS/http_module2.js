// In node js it handles server requests and responce

const http = require("http");
const { json } = require("stream/consumers");
const data = require("./http_data.js");

http.createServer((req , res)=>{
    res.writeHead(200 , ("Content-Tpye" , "application/js"));
    res.write(JSON.stringify(data[1]));
    res.end();
}).listen(3000);

