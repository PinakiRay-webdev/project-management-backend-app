import express from "express"
import projectRouter from "./router/project.router.js"
import taskRouter from "./router/task.router.js"
const app = express()

app.use(express.json())
app.use(projectRouter)
app.use(taskRouter)

app.get('/', (req,res) =>{
    res.send(`welcome to the project and task service`)
})

export default app