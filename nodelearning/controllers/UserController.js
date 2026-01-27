const userModel = require("../models/UserModel")

const getAllUsers = async(req,res) => {
    const users = await userModel.find()

    res.json({
        data : users,
        message : "Users Fetched successfully !"
    })
}

const getUserById = async(req,res) => {

    const foundUser = await userModel.findById(req.params.id)

    if(foundUser){
        res.json({
            data : foundUser,
            message : "User found by the criteria"
        })
    }else{
        res.json({
            data : null,
            message : "User not found by the criteria"
        })
    }
}


const addUser = async(req,res) => {
    console.log("req body ... ", req.body)

    try{
        const savedUser = await userModel.create(req.body)
        res.json({
            message : "User created successfully!",
            data : savedUser
        })
    }catch(err){
        res.json({
            message : "Can not add user",
            error : err
        })
    }
}


const deleteUserById = async (req,res) => {
    try{
        const deletedUser = await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message : "User Deleted Successfully!",
            data : deletedUser
        })
    }catch(err){
        res.status(500).json({
            message : "Error Detected.",
            error : err
        })
    }
}


const updateUser = async(req,res) => {
    try{
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            message : "User Updated Successfully..",
            data : updatedUser
        })
    }catch(err){
        res.status(500).json({
            message : "Error while Updating User",
            error : err
        })
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
    updateUser
}