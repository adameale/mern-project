
import  express  from "express";
const app =express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import connectDB from "./db/conection.js";

import AuthoRoutes from './routes/AuthoRoutes.js'
import JobRoutes from './routes/JobRoutes.js'

import errorHandlerM from "./middleware/Error_Handler.js";
import Not_found from "./middleware/Not_found.js";


app.use(express.json())

app.get('/',(req,res)=>{
    
res.json({msg:'welcome! '})    
})

app.use('/api/v1/auth', AuthoRoutes)
app.use('/api/v1/Jobs', JobRoutes)  

app.use(Not_found)
app.use(errorHandlerM)
const port=process.env.PORT||500


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
          console.log(`Server is listening on port ${port}...`);
        });
      } catch (error) {
        console.log(error);
      }
    };
start()