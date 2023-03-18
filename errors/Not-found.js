import { StatusCodes } from "http-status-codes"
import customAPIError from "./custom-API.js"


class NotFoundError extends customAPIError {
    constructor(message){
      super(message)
      this.StatusCode = StatusCodes.NOT_FOUND
    }
  }


  export default NotFoundError