const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TSchema = new Schema({
    title : {
        required : true,
        type : String
    },
    amount : {
        required : true,
        type : Number
    },
    type : {
        required : true,
        type : String
    },
    description : {
        type : String
    },
    category : {
        required : true ,
        type : String
    },
    currency : {
        required : true,
        type : String
    }
},
{
    timestamps : true
})

// { "title": "ss", 
// "amount": 121, 
// "type": "income", 
// "description": "", 
// "category": "others", 
// "date": "2/24/2026", 
// "currency": "INR", 
// "id": 13 }]

module.exports = mongoose.model("transactions", TSchema)
