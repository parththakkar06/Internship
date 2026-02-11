const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")

const corsOptions = {
    origin : "http://127.0.0.1:5500",
    methods : ["GET","POST", "PUT", "DELETE"],
    allowedHeaders : ['Content-type', 'Authorization'],
    credentials : true
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

const transactionRoutes = require("./routes/TransactionRoutes")
app.use("/",transactionRoutes)

//server
const PORT = 3000
app.listen(PORT,()=>{
    console.log("Server Working on PORT .. ",PORT)
})