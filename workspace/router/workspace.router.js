import express from "express";
import { createWorkSpace } from "../controller/workspace.controller.js";

const workspaceRouter = express.Router()

workspaceRouter.post('/create', createWorkSpace)

export default workspaceRouter