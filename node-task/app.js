const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(cookieParser())

//routes
const userRoutes = require("./routes/UserRoutes")
app.use("/user",userRoutes)

const securityRoutes = require("./routes/SecurityRoutes")
app.use("/",securityRoutes)

//server connection 
const PORT = 3000
app.listen(PORT, () => {
    console.log("Server running on PORT ... ", PORT)
})