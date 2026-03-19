const express = require("express")
const routes = express.Router()
const userController = require("../controllers/UserController")
const authMiddleware = require("../middlewares/authMiddleware")

routes.post("/login",userController.loginUser)
routes.post("/users",userController.addUsers)
routes.get("/me", authMiddleware , userController.verifyUser)
routes.post("/logout",userController.logoutUser)

module.exports = routes