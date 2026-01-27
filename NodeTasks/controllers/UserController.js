const userModel = require("../models/UserModel");

const addUser = async(req,res) => {
    console.log("req.body ... ",req.body);
    try{
        const savedUser = await userModel.create(req.body);
        res.status(201).json({
            message : "User Created Successfully!",
            data : savedUser
        });
    }catch(err){
        res.status(400).json({
            message : "User cannot be created.",
            error : err
        });
    }
};

const getUsersByStatus = async (req,res) => {
    try{
        let {status , limit} = req.query;
        console.log(typeof status)
        if(status){
            if(status == "true"){
                status = true; 
            }else if(status == "false"){
                status = false;
            }else{
                status = undefined;
            }
        }


        let filteredUsers = await userModel.find()
    
        filteredUsers = filteredUsers.filter(u=>u.status === status)

        if(limit){
            filteredUsers = filteredUsers.splice(0,parseInt(limit))
        }
        
        if(filteredUsers){
            res.status(200).json({
                query_params : `status = ${status} and limit = ${limit}`,
                message : "Active Users Found !",
                data : filteredUsers
            })
        }else{
            res.status(204).json({
                message : "No Active Users Found !",
                data : null
            })
        }
    }catch(err){
        res.status(500).json({
            message : "Error Detected",
            error : err
        })
    }
}


const getUserById = async(req,res) => {
    try{
        const id = req.params.id
        const foundUser = await userModel.findById(id);
        // console.log(foundUser)
        if(foundUser){
            res.status(200).json({
                id : `${id}`,
                message : "User Found!!",
                data : foundUser
            })
        }else{
            res.status(204).json({
                id : `${id}`,
                message : "No user found !",
                data : null
            })
        }
    }catch(err){
        res.status(500).json({
            message : "Error Detected",
            error : err
        })
    }
}


module.exports = {
    addUser,
    getUsersByStatus,
    getUserById
}
