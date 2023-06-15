class ErrorHandlers extends Error{
    constructor(message , statusCode){
        super(message);
        this.statusCode = statusCode;
        console.log("ErrorHandlers");

        // Error.captureStackTrace(this , this.constructor);
    }
}

export default ErrorHandlers;