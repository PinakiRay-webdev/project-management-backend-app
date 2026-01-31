import Project from "../model/project.model.js";
import Task from "../model/task.model.js";
export const createTask = async(req,res) =>{
    try {
        const {title,description,status,priority,projectId,assignedTo,dueDate} = req.body

        const project = await Project.findById(projectId)

        if(!project){
            res.status(404).send('Invalid project ID')
            return;
        }

        const newTask = await new Task({title,description,status,priority,projectId,assignedTo,dueDate})

        newTask.save()
        
        await Project.findByIdAndUpdate(projectId, {$push:{tasks:newTask._id}})

        res.status(201).send({success:true, newTask})
        
    } catch (error) {
        res.status(500).send({success:false, message:error.message})
    }
}

export const displayAllTasks = async(req,res) =>{
    try {
        const tasks = await Task.find()

        res.status(200).send({success:true, tasks})
        
    } catch (error) {
        res.status(500).send({success:false, message:error.message})
    }
}

export const updateTask = async(req,res) =>{
    try {
        const taskId = req.params.id
        const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {new: true})

        if(!updatedTask){
            res.status(404).send({success: false, message: 'task not found to update'})
            return;
        }

        res.status(200).send({success:true, updatedTask})
        
    } catch (error) {
        res.status(500).send({success:false, message:error.message})
    }
}

export const deleteTask = async(req,res) =>{
    try {

        const taskId = req.params.id
        const deletedTask = await Task.findByIdAndDelete(taskId)

        if(!deletedTask){
            res.status(404).send({success: false, message: 'task not found to delete'})
            return;
        }

        res.status(200).send({success:true, deletedTask})
        
    } catch (error) {
        res.status(500).send({success:false, message:error.message})
    }
}