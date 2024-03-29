import { StatusCodes } from "http-status-codes"

const errorHandlerM = (err, req, res, next)=>{
console.log(err)
const defaultError ={
    StatusCodes:err.StatusCode||StatusCodes.INTERNAL_SERVER_ERROR,
    msg:err.message|| 'something went wrong ,try again later',
}

if (err.name === 'ValidationError') {
    defaultError.StatusCodes = StatusCodes.BAD_REQUEST
   // defaultError.msg = err.message
   defaultError.msg=Object.values(err.errors).map((item)=> item.message).join(',')
}
if(err.code && err.code === 11000){
    defaultError.StatusCodes = StatusCodes.BAD_REQUEST
    defaultError.msg=`${Object.keys(err.keyValue)} field has to be unique` 
}
 

res.status(defaultError.StatusCodes).json({msg:defaultError.msg })
}
export default errorHandlerM