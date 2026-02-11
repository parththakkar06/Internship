const express = require("express")
const cors = require("cors")
const app = express()
const cookieParser = require("cookie-parser")

const corsOptions = {
    origin : "http://127.0.0.1:5500",
    methods : ["GET","POST"],
    allowedHeaders : ['Content-type', 'Authorization'],
    credentials : true
}
// global middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))


const userRoutes = require("./routes/UserRoutes")
app.use("/user",userRoutes)

const uploadRoutes = require("./routes/UploadRoutes")
app.use("/",uploadRoutes)

const PORT = 3000;
app.listen(PORT , ()=>{
    console.log("Server started on PORT ... ",PORT)
})