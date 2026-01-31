import express from "express"
import expressProxy from "express-http-proxy"

const app = express()

app.use('/api/auth', expressProxy('http://localhost:5001'))
app.use('/api/workspaces', authGuard, proxy('http://localhost:5002', {
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
        proxyReqOpts.headers['x-user-id'] = srcReq.user._id;
        return proxyReqOpts;
    }
}));


export default app  