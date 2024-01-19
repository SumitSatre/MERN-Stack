const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

app.post('/message' , (req , res)=>{
    const message = req.body;
    res.json(message);
})

app.listen(port);