import express from "express";
import config from "./config/serverconfig.js"
import healthRoutes from "./routes/healthRoutes.js";

const app = express();

//global middleware
app.use(express.json());

app.use("/",healthRoutes)

console.log("sssssss")



export default app;