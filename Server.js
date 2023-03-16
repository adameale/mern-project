import  express  from "express";
const app =express()
import dotenv from 'dotenv'
dotenv.config()

import connectDB from "./db/conection.js";

import AuthoRoutes from './routes/AuthoRoutes.js'
import errorHandlerM from "./middleware/Error_Handler.js";
import Not_found from "./middleware/Not_found.js";


app.get('/',(req,res)=>{
    throw new Error('error')
res.send('welcome! ')    
})
app.use(Not_found)
app.use(errorHandlerM)
const port=process.env.PORT||500


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}...`)
            })
    } catch (error){
        console.log(error)

    }
}
start()