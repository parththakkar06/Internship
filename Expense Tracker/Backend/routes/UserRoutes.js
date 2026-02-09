const express = require("express")
const routes = express.Router()
const userController = require("../controllers/UserController")

routes.post("/login",userController.loginUser)
routes.post("/users",userController.addUsers)

module.exports = routes