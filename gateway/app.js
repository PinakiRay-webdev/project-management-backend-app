import express from "express"
import expressProxy from "express-http-proxy"

const app = express()

app.use('/api/auth', expressProxy('http://localhost:5001'))
app.use('/api/workspace', expressProxy('http://localhost:5002'))


export default app  