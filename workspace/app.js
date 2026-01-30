import express from "express"
import workspaceRouter from "./router/workspace.router.js"

const app = express()

app.use(express.json())
app.use(workspaceRouter)

app.get('/', (req,res) =>{
    res.send(`welcome to the workspace service`)
})

export default app