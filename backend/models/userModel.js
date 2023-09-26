const mongoose = require("mongoose")

const userSchema =new mongoose.Schema({
    name: {
        type: String ,
        required:[true, "name is required"]
    },
    email:{
        type: String,
        required:[true , "email is required and should be unique"],
        unique:true ,
    },
    password:{
        type: String,
        required:[true , "passwordl is required and should be unique"],
    },
    role:{
        type: String,
        required:[true , "role is required and should be unique"],
        enum:['employee' , 'admin','evaluator'] ,
        default:'employee'
        
    }
} , { timestamps:true})

const userModel = mongoose.model('users' ,userSchema)

module.exports = userModel