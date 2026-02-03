import workspaceDB from "../model/workspace.model.js";
import {v4 as uuidv4} from "uuid"

export const createWorkSpace = async (req,res) =>{
    try {
        const {name,description, ownerId, member} = req.body

        const newWorkspace = await new workspaceDB({name, description, ownerId, inviteCode: uuidv4(), member:[...member, {userId: ownerId, role: 'admin'}]})
        
        newWorkspace.save()

        res.status(201).send({status: 'success', newWorkspace})

    } catch (error) {
        res.status(500).send({status: 'error', message: error.message})
    }
}

export const displayAllWorkspace = async(req,res) =>{
    try {
        const workspaces = await workspaceDB.find()

        res.status(200).send({success:true, workspaces})
        
    } catch (error) {
        res.status(500).send({success:false, message:error.message})
    }
}



