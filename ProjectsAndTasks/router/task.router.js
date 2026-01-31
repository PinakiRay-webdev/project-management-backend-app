import express from "express"
import { createTask, deleteTask, displayAllTasks, updateTask } from "../controller/task.controller.js";

const taskRouter = express.Router()

taskRouter.post('/create/task', createTask)
taskRouter.get('/task/list', displayAllTasks)
taskRouter.patch('/task/:id', updateTask)
taskRouter.delete('/task/:id', deleteTask)

export default taskRouter