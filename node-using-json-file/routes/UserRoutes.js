const express = require("express")
const routes = express.Router()
const userController = require("../controllers/UserController")
const authMiddleware = require("../middlewares/AuthMiddleware")
const authenticationMiddleware = require("../middlewares/AuthenticationMiddleware")

// routes.get("/users",authMiddleware.verifyUser,userController.getAllUsers)
routes.get("/users",userController.getAllUsers)
routes.post("/users",userController.addUsers)
routes.get("/users/:id",userController.getUserById)
routes.delete("/users/:id",userController.deleteUserById)
routes.put("/users/:id",userController.updateUser)
routes.post("/login",userController.loginUser)
routes.get("/profile",authenticationMiddleware.authenticateToken,userController.userProfile)
routes.get("/token",userController.getUserByToken)
routes.get("/refresh",userController.refreshUserToken)

module.exports = routes
