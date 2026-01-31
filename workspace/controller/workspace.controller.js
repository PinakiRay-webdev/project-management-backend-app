import workspaceDB from "../model/workspace.model.js";
import {v4 as uuidv4} from "uuid"

export const createWorkSpace = async (req,res) =>{
    const ownerId = req.headers['x-user-id']
    try {
        const {name,description, member} = req.body

        const newWorkspace = await new workspaceDB({name, description, inviteCode: uuidv4(), member:[...member, {userId: ownerId, role: 'admin'}]})
        
        newWorkspace.save()

        res.status(201).send({status: 'success', newWorkspace})

    } catch (error) {
        res.status(500).send({status: 'error', message: error.message})
    }
}

