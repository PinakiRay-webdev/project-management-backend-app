import mongoose from "mongoose";

const connectDB = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/task_auth').then(()=>{
        console.log(`Mongodb is connected`)
    }).catch((error)=>{
        console.log(error.message)
    })
}

export default connectDB