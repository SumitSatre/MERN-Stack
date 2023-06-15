import ErrorHandlers from "../utils/errorHandler.js";

export const userController = (req , res ,next)=>{
    
    let isUser = false;

    console.log("userController");

    if(isUser){
        return next(new ErrorHandlers("User already exist" , 500));
    }
    
    res.json({
        "success":true,
        "message" : "User created Succcefully" 
    })
}