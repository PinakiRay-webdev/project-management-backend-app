import express from "express"
import expressProxy from "express-http-proxy"
import authGuard from "./middleware/authGuard.js";
import cookieParser from "cookie-parser";

const app = express()

app.use(cookieParser())
app.use('/api/auth', expressProxy('http://localhost:5001'))
app.use('/api/workspaces', authGuard, expressProxy('http://localhost:5002', {
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
        proxyReqOpts.headers['x-user-id'] = srcReq.user._id;
        return proxyReqOpts;
    }
}));


export default app  