const express = require("express")
const router = express.Router()
const userController = require("../controllers/UserController")

router.get("/users",userController.getAllUsers)
router.get("/users/:id",userController.getUserById)
router.post("/user",userController.addUser)
router.delete("/user/:id",userController.deleteUserById)

module.exports = router