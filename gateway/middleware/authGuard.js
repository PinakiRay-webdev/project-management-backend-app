import axios from "axios"
const authGuard = async (req,res,next) =>{
    const token = req.cookies.token

    if(!token){
        res.status(401).send({status: 'error', message: 'Unauthorized'})
        return;
    }
    try {

        const response = await axios.post('http://localhost:5000/api/auth/verify', {
            headers:{
                authorization: token 
            }
        }) 

        if(response.data.success){
            req.user = response.data.user
            next;
        }

    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
}

export default authGuard