import express from "express"
import authRouter from "./router/auth.router.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/auth', authRouter)

app.get('/auth', (req,res) =>{
    res.status(200).send(`Welcome to the auth service`)
})

export default app