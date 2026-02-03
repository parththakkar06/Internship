const { json } = require("express");
const jwt = require("jsonwebtoken")
const secret = "innovate"

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./data")
}

const getData = () => {
    let data
    if (localStorage.getItem("data") === null) {
        return data = [];
    } else {
        return data = JSON.parse(localStorage.getItem("data"))
    }
}

const getID = () => {
    let id
    if (localStorage.getItem("id") === null) {
        return id = 1
    } else {
        return id = localStorage.getItem("id")
    }
}

const getAllUsers = (req, res) => {
    const data = getData()
    res.json({
        message: "All Users Fetched Succesfully!",
        data: data
    })
}

const addUsers = (req, res) => {
    const data = getData()
    let id = getID()
    const newUser = {
        id: ++id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    console.log(newUser)

    data.push(newUser)
    console.log(data)
    localStorage.setItem("data", JSON.stringify(data))
    localStorage.setItem("id", id)
    const token = jwt.sign(newUser,secret)
    res.json({
        message: "New User Created Successfully!",
        token : token
    })
}

const updateUser = (req, res) => {
    const data = getData()
    const id = req.params.id
    const index = data.findIndex(u => u.id == id)
    if (index !== -1) {
        data[index] = {
            id : id,
            name : req.body.name || data[index].name,
            age : req.body.age || data[index].age,
            email : data[index].email,
            password : data[index].password
        };
        localStorage.setItem("data", JSON.stringify(data))
        res.json({
            message: "User Updated Successfully",
            data: data[index]
        })
    }
}


const getUserById = (req,res) => {
    const data = getData()
    const id  = req.params.id
    const index = data.findIndex(u => u.id == id)
    res.json({
        message : "User Found!",
        data : data[index]
    })
}


const getUserByToken = (req,res) => {
    const data = getData()
    const token = req.params.token
    const userFromToken = jwt.verify(token, secret)
    res.json({
        token : token,
        data : userFromToken
    })
}


module.exports = {
    getAllUsers,
    addUsers,
    updateUser,
    getUserById,
    getUserByToken
}