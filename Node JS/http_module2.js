// In node js it handles server requests and responce

const http = require("http");
const { json } = require("stream/consumers");
const data = require("./data_for_redux.js");

http.createServer((req , res)=>{
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);

