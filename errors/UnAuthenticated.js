import { StatusCodes } from "http-status-codes"
import customAPIError from "./custom-API.js"

class UnAuthenticated extends customAPIError {
    constructor(message){
      super(message)
      this.StatusCode = StatusCodes.UNAUTHORIZED
    }
  }

  export default UnAuthenticated 