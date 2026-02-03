import express from "express";
import { createWorkSpace, displayAllWorkspace } from "../controller/workspace.controller.js";

const workspaceRouter = express.Router()

workspaceRouter.post('/create', createWorkSpace)
workspaceRouter.get('/',displayAllWorkspace)

export default workspaceRouter