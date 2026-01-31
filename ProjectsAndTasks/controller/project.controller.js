import Project from "../model/project.model.js";

export const createProject = async(req,res) =>{
    try {
        const {name,description,workspaceId,ownerId} = req.body

        const newProject = await new Project({name,description,workspaceId,ownerId})

        newProject.save()

        res.status(201).send({success:true, newProject})
        
    } catch (error) {
        res.status(500).send({success:false, message:error.message})
    }
}

export const displayAllProjects = async(req,res) =>{
    try {
        const projects = await Project.find().populate('tasks')

        res.status(200).send({success:true, projects})
        
    } catch (error) {
        res.status(500).send({success:false, message:error.message})
    }
}

export const updateProject = async(req,res) =>{
    try {

        const projectId = req.params.id
        const updatedProject = await Project.findByIdAndUpdate(projectId, req.body, {new: true})

        if(!updatedProject){
            res.status(404).send({success: false, message: 'Project not found to update'})
            return;
        }

        res.status(200).send({success:true, updatedProject})
        
    } catch (error) {
        res.status(500).send({success:false, message:error.message})
    }
}

export const deleteProject = async(req,res) =>{
    try {

        const projectId = req.params.id
        const deletedProject = await Project.findByIdAndDelete(projectId)

        if(!deletedProject){
            res.status(404).send({success: false, message: 'Project not found to delete'})
            return;
        }

        res.status(200).send({success:true, deletedProject})
        
    } catch (error) {
        res.status(500).send({success:false, message:error.message})
    }
}