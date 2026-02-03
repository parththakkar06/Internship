const express = require("express")
const cors = require("cors")
const app = express()

const corsOptions = {
    origin : "http://localhost:3000",
    methods : ["GET","POST"],
    allowedHeaders : ['Content-type', 'Authorization']
}
// global middleware
app.use(express.json())
app.use(cors(corsOptions))


const userRoutes = require("./routes/UserRoutes")
app.use("/user",userRoutes)


const PORT = 3000;
app.listen(PORT , ()=>{
    console.log("Server started on PORT ... ",PORT)
})