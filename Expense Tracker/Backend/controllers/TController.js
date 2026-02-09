const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "parth"
// const secret2 = "thakkar"

// if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
// }

const getTransactions = () => {
    try {
        return JSON.parse(localStorage.getItem("transactions")) || [];

    }catch(err) {
        console.error("Getlocal",err)
    }
}

const getID = () => {
    try {
        return localStorage.getItem("id") || 1;
    }catch(err) {
        console.error("Getlocal",err)
    }
}

const getAllTransactions = (req, res) => {
    const transactions = getTransactions()
    res.json({ transactions })
}


const addTransactions = (req, res) => {
    const data = getTransactions()
    let id = getID()
    console.log(id)
    req.body.id = ++id;
    data.push(req.body)
    localStorage.setItem("id",id)
    localStorage.setItem("transactions", JSON.stringify(data))
    res.json({
        message : "Transaction Added."
    })
}


const getTransactionById = (req, res) => {
    const data = getTransactions()
    const id = req.params.id
    const foundTransaction = data.filter(u => u.id == id)
    if (foundTransaction.length > 0) {
        res.json({
            message: "Transaction Found!",
            data: foundTransaction,
        })
    } else {
        res.json({
            message: "Transaction Not Found!"
        })
    }
}


const deleteTransactionById = (req, res) => {
    const data = getTransactions()
    const id = req.params.id
    const index = data.findIndex(u => u.id == id)
    const deletedTransaction = data.filter(u => u.id == id)
    if (index !== -1) {
        data.splice(index, 1)
        localStorage.setItem("transactions", JSON.stringify(data))
        res.json({
            message: "Transaction Deleted Successfully",
            data: deletedTransaction
        })
    }
}

const updateTransaction = (req, res) => {
    const data = getTransactions()
    const id = req.params.id
    const index = data.findIndex(u => u.id == id)
    if (index !== -1) {
        data[index] = req.body;
        localStorage.setItem("transactions", JSON.stringify(data))
        res.json({
            message: "Transaction Updated Successfully",
            data: req.body
        })
    }
}



module.exports = {
    getAllTransactions,
    addTransactions,
    getTransactionById,
    deleteTransactionById,
    updateTransaction,
    // loginUser,
    // refreshUserToken
}