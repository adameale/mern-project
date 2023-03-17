import { StatusCodes } from "http-status-codes"

const errorHandlerM = (err, req, res, next)=>{
console.log(err)
const defaultError ={
    StatusCodes:StatusCodes.INTERNAL_SERVER_ERROR,
    msg: 'Something went wrong , try again later',
}

if (err.name === 'validation error') {
    defaultError.StatusCodes = StatusCodes.BAD_REQUEST
   // defaultError.msg = err.message
}
 
res.status(defaultError.StatusCodes).json({msg:err })
//res.status(defaultError.StatusCodes).json({msg:defaultError.msg })
}
export default errorHandlerM