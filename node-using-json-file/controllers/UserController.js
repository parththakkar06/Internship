const md5 = require("md5")
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

const getData = () => {
    let data;
    if(localStorage.getItem("data") === null){
        return data = [];
    }else{
        return data = JSON.parse(localStorage.getItem("data")) 
    }
}

const getAllUsers = (req, res) => {
    const data = getData()
    res.json({ data })
}


const addUsers = (req, res) => {
    const data = getData()
    const newUser = req.body
    data.push(newUser)
    localStorage.setItem("data", JSON.stringify(data))
    res.json(newUser)
}


const getUserById = (req, res) => {
    const data = getData()
    const id = req.params.id
    const foundUser = data.filter(u => u.id == id)
    console.log(foundUser)
    const hash = md5(foundUser)
    if(foundUser.length > 0){
        res.json({
            message : "User Found!",
            data : foundUser,
            hasheddata : hash
        })
    }else{
        res.json({
            message : "User Not Found!"
        })
    }
}


const deleteUserById = (req,res) => {
    const data = getData()
    const id = req.params.id
    const index = data.findIndex(u => u.id == id)
    const deletedUser = data.filter(u => u.id == id)
    if(index !== -1){
        data.splice(index,1)
        localStorage.setItem("data",JSON.stringify(data))
        res.json({
            message : "User Deleted Successfully",
            data : deletedUser
        })
    }
}

const updateUser = (req,res) => {
    const data = getData()
    const id = req.params.id
    const index = data.findIndex(u => u.id == id)
    if(index !== -1){
        data[index] = req.body;
        localStorage.setItem("data",JSON.stringify(data))
        res.json({
            message : "User Updated Successfully",
            data : req.body
        })
    }
}

module.exports = {
    getAllUsers,
    addUsers,
    getUserById,
    deleteUserById,
    updateUser
}