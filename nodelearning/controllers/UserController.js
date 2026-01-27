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

module.exports = {
    getAllUsers,
    getUserById
}