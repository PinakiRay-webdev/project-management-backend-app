import mongoose from "mongoose";

const connectDB = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/task_workspace').then(() =>{
        console.log(`Mongodb is connected`)
    }).catch((error) =>{
        console.error(error.message)
    })
}

export default connectDB 