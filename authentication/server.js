import app from "./app.js";
import connectDB from "./config/db.config.js";

const port = 5001

app.listen(port, () =>{
     connectDB()
    console.log(`Authentication server is listenning on port ${port}`)
})