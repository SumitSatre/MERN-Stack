import express from "express";

const app = express();

import user from "./routes/user.js";
import errorMiddleware from "./middlewares/error.js";

console.log("app");

app.use("/user" , user);

app.use(errorMiddleware);

app.listen(3000 , ()=>{
    console.warn("sever in working");
});