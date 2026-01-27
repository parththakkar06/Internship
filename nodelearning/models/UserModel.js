const mongoose = require("mongoose")
const Schema = mongoose.Schema  // class

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    age: {
        type : Number,
        required : true
    },
    status: {
        type : Boolean,
        required : true
    }
   
    //fields
})

module.exports = mongoose.model("users",userSchema)