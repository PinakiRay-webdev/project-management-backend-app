import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import authDB from "../model/auth.model.js";

dotenv.config()


const protect = async (req, res, next) =>{
    try {
        const token = req.cookies.token

        if(!token){
            return res.status(401).send({status: 'error', message: 'Unauthorized: No token provided'})
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const user = await authDB.findById(decoded.id).select('-password')

        if (!user) {
            return res.status(401).send({ status: 'error', message: 'Unauthorized: User not found' });
        }

        req.user = user

        next()

    } catch (error) {
        res.status(401).send({status: 'error', message: 'Unauthorized: Invalid token'})
    }
}

export default protect