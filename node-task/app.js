const express = require("express")
const app = express()

app.use(express.json())

//routes
const userRoutes = require("./routes/UserRoutes")
app.use("/user",userRoutes)

//server connection 
const PORT = 3000
app.listen(PORT, () => {
    console.log("Server running on PORT ... ", PORT)
})