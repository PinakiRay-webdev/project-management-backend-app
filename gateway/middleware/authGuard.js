import axios from "axios"
const authGuard = async (req,res,next) =>{
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

        if(!token){
            res.status(401).send({status: 'error', message: 'Unauthorized'})
            return;
        }

        const response = await axios.post('http://localhost:5000/api/auth/verify') 

    } catch (error) {
        
    }
}