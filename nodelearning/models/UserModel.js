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
    },
    hobbies:[{
        type : String
    }],
    bloodGroup:{
        enum:["A+","A-","AB+","AB-","B+","B-","O+","O+"],
        type: String
    }
   
    //fields
},{
    timestamps : true
})

module.exports = mongoose.model("users",userSchema)