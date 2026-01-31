import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required: [true, 'please provide the task title']
    },
    description:{
        type:String,
        required: [true, 'please provide the task description']
    },
    status:{
        type:String,
        enum: ['to do','in progress', 'done'],
        default: 'to do'
    },
    priority:{
        type:String,
        enum: ['low','moderate', 'high'],
        default: 'moderate'
    },
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    assignedTo:{
        type: String,
        required: [true, 'please provide the user id']
    },
    dueDate:{
        type:Date,
        required: [true, 'please provide the due date']
    }
})

const Task = mongoose.model('Task', taskSchema)

export default Task