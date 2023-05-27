const express = require("express");
const path = require("path");

const app = express();
const dirPath = path.join(__dirname , "public");

app.use(express.static(dirPath));
// http://localhost:5000/about.html


app.listen(5000);