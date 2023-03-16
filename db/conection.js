import mongoose from "mongoose"
const connectDB = (url)=>{
    return mongoose.connect(url)
}
export default connectDB
// 'mongodb+srv://user:DAN@adam@mern.wrztths.mongodb.net/PROJECT 0?retryWrites=true&w=majority'