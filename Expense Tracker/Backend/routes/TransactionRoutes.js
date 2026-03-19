const express = require("express")
const routes = express.Router()
const TController = require("../controllers/TController")
const authMiddleware = require("../middlewares/authMiddleware")

routes.get("/transactions",authMiddleware,TController.getAllTransactions)
routes.post("/transactions",authMiddleware,TController.addTransactions)
routes.get("/transactions/:id",authMiddleware,TController.getTransactionById)
routes.delete("/transactions/:id",authMiddleware,TController.deleteTransactionById)
routes.put("/transactions/:id",authMiddleware,TController.updateTransaction)
// routes.get("/refresh",TController.refreshUserToken)

module.exports = routes
