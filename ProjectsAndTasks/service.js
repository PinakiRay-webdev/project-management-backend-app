import app from "./app.js";
import connectDB from "./config/db.config.js";

const port = 5003;

app.listen(port, () =>{
    connectDB()
    console.log(`The project server is running on port ${port}`)
})