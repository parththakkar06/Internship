const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "parth"
// const secret2 = "thakkar"
const tModel = require("../models/TModel")

const getAllTransactions = async (req, res) => {
    const transactions = await tModel.find()
    res.json({
        data: transactions
    })
}


const addTransactions = async (req, res) => {
    const newTransaction = await tModel.create(req.body)
    res.json({
        message: "Transaction Added.",
        data: newTransaction
    })
}


const getTransactionById = async (req, res) => {
    const id = req.params.id
    const foundTransaction = await tModel.findById(id)
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


const deleteTransactionById = async (req, res) => {
    const id = req.params.id
    try {
        const deletedTransaction = await tModel.findByIdAndDelete(id)

        res.json({
            message: "Transaction Deleted Successfully",
            data: deletedTransaction
        })
    } catch (err) {
        res.json({
            message: "Problem occured",
            error: err.message
        })
    }
}

const updateTransaction = async(req, res) => {
    try {
        const updatedTransaction = await tModel.findOneAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            message: "Transaction Updated Successfully",
            data: updatedTransaction
        })
    } catch (err) {

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