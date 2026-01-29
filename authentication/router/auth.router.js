import express from "express"
import { login, logout, register, viewProfile } from "../controller/auth.controller.js";
import protect from "../middleware/protect.js";

const authRouter = express.Router()

authRouter.post('/register' , register)
authRouter.post('/login' , login)
authRouter.get('/profile' , protect, viewProfile)
authRouter.get('/logout' , logout)

export default authRouter