import express from "express"
import expressProxy from "express-http-proxy"
import cookieParser from "cookie-parser";

const app = express()

app.use(cookieParser())
app.use('/api/auth', expressProxy('http://localhost:5001'))
app.use('/api/workspaces', expressProxy('http://localhost:5002'))
app.use('/api/projects', expressProxy('http://localhost:5003'))


export default app  