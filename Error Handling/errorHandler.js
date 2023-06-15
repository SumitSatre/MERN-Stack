class ErrorHandler extends Error{
    constructor(message , statusCode){
        super(message);
        this.message = this.message || "Internal Server error";
        this.statusCode = this.statusCode || 500;

        Error.captureStackTrace(this , this.constructor);
    }
}

export default  ErrorHandler;