const md5 = require("md5")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "parth"

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
    const hashedPassword = bcrypt.hashSync(req.body.password,10)
    req.body.password = hashedPassword
    const newUser = req.body
    const token = jwt.sign(newUser,secret)
    data.push(newUser)
    localStorage.setItem("data", JSON.stringify(data))
    res.json({
        data :newUser,
        token : token
    })
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


const loginUser = (req,res) => {
    const data = getData()
    const {email , password} = req.body
    console.log(password)
    const userByEmail = data.filter(u => u.email === email)
    console.log(userByEmail)
    if(userByEmail.length > 0) {
        if(bcrypt.compareSync(password,userByEmail[0].password)){
            res.json({
                message : "User Logged In Successfully!",
                data : userByEmail
            })
        }else{
            res.json({
                message : "Invalid Credentials!"
            })
        }
    }else{
        res.json({
            message : "User Not Found!"
        })
    }
}



const getUserByToken = (req,res) => {
    const token = req.body.token
    const data = getData()
    try{
        const userFromToken = jwt.verify(token,secret)
        console.log(userFromToken)
        const user = data.find(u=>u.id == userFromToken.id)
        res.json({
            message : "Valid User !",
            data : user,
            userfromtoken : userFromToken
        })
    }catch(err){
        res.json({
            message : "Token not valid!",
            error : err
        })
    }
}

module.exports = {
    getAllUsers,
    addUsers,
    getUserById,
    deleteUserById,
    updateUser,
    loginUser,
    getUserByToken
}