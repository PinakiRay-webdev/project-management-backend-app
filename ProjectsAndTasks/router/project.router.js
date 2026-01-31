import express from "express"
import { createProject, deleteProject, displayAllProjects, updateProject } from "../controller/project.controller.js";

const projectRouter = express.Router()

projectRouter.post('/create/project', createProject)
projectRouter.get('/project/list', displayAllProjects)
projectRouter.patch('/project/:id', updateProject)
projectRouter.delete('/project/:id', deleteProject)

export default projectRouter