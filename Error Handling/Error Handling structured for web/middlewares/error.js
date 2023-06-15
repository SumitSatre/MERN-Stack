const errorMiddleware = (err , req , res , next)=>{
    err.message = err.message || "Internal Server error";
    err.statusCode = err.statusCode || 500;

    console.log("errorMiddleware");

    res.json({
        success : false,
        message : err.message
    })
}

export default  errorMiddleware;