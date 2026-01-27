const express = require("express");
const app = express();
const mongoose = require("mongoose");

//global middleware
app.use(express.json());

//routes
const userRoutes = require("./routes/UserRoutes")
app.use("/user",userRoutes)


//Database Connection (Atlas cluster)
mongoose.connect("mongodb+srv://root:root@cluster0.9ydkd31.mongodb.net/Node_Practice").then(()=>{
    console.log("Database Connected Successfully!!");
});


//server connection
const PORT = 3001;
app.listen(PORT,()=>{
    console.log("Server started on Port .... ",PORT);
});