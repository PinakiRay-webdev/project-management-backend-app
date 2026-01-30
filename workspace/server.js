import app from "./app.js";
import connectDB from "./config/db.config.js";

const port = 5002;

app.listen(port, () =>{
    connectDB()
    console.log(`The workspace server is listenning on port ${port}`)
})

