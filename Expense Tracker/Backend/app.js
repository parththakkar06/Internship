const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const uri = 'mongodb://127.0.0.1:27017/expense_tracker';

const corsOptions = {
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-type', 'Authorization'],
    credentials: true
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

const transactionRoutes = require("./routes/TransactionRoutes")
app.use("/", transactionRoutes)

const userRoutes = require("./routes/UserRoutes");
const { default: mongoose } = require("mongoose");
app.use("/user",userRoutes)


const connectDb = async() => {
    try{
        await mongoose.connect(uri)
        console.log("Mongo Db Connected")
    }catch(err){
        console.error("Error ... " , err.message)
    }
}

connectDb()
//server
const PORT = 3000
app.listen(PORT, () => {
    console.log("Server Working on PORT .. ", PORT)
})