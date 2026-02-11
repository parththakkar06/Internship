const express = require("express")
const routes = express.Router()
const TController = require("../controllers/TController")
// const authMiddleware = require("../middlewares/AuthMiddleware")

routes.get("/transactions",TController.getAllTransactions)
routes.post("/transactions",TController.addTransactions)
// // routes.get("/transactions/:id",TController.getTransactionById)
// routes.delete("/transactions/:id",TController.deleteTransactionById)
// routes.put("/transactions/:id",TController.updateTransaction)
// routes.post("/login",TController.loginUser)
// routes.get("/refresh",TController.refreshUserToken)

module.exports = routes
