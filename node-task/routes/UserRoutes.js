const express = require("express")
const routes = express.Router()
const userController = require("../controllers/userController")

routes.get("/users",userController.getAllUsers)
routes.post("/users",userController.addUsers)
routes.put("/users/:id",userController.updateUser)
routes.get("/users/:id",userController.getUserById)
routes.get("/token/:token",userController.getUserByToken)


module.exports = routes