const express = require("express")
const routes = express.Router()
const userController = require("../controllers/userController")
const authMiddleware = require("../middlewares/AuthMiddleware")

routes.get("/users",authMiddleware.verifyUser,userController.getAllUsers)
routes.post("/users",userController.addUsers)
routes.put("/users/:id",userController.updateUser)
routes.get("/users/:id",userController.getUserById)
routes.get("/token/:token",userController.getUserByToken)
routes.post("/login",userController.loginUser)

module.exports = routes