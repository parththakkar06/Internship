const mongoose = require("mongoose")
const Schema = mongoose.Schema  // class

const userSchema = new Schema({
   
    //fields
})

module.exports = mongoose.model("users",userSchema)