import express from "express";
import config from "./config/serverconfig.js"

const app = express();

//global middleware
app.use(express.json());

console.log("sssssss")



app.listen(config.port, ()=>{
    console.log(`Server Running on port ${config.port} in ${config.env} mode`);
});


export default app;