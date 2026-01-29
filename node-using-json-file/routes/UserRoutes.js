const express = require("express")
const routes = express.Router()
const userController = require("../controllers/UserController")

routes.get("/users",userController.getAllUsers)
routes.post("/users",userController.addUsers)
routes.get("/users/:id",userController.getUserById)
routes.delete("/users/:id",userController.deleteUserById)
routes.put("/users/:id",userController.updateUser)
routes.get("/login",userController.loginUser)

module.exports = routes
