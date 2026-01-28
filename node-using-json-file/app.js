const express = require("express")
const app = express()

// global middleware
app.use(express.json())


const userRoutes = require("./routes/UserRoutes")
app.use("/user",userRoutes)


const PORT = 3000;
app.listen(PORT , ()=>{
    console.log("Server started on PORT ... ",PORT)
})