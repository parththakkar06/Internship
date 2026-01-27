const express = require("express");
const routes = express.Router();
const userController = require("../controllers/UserController");

routes.post("/user",userController.addUser);
routes.get(`/users`,userController.getUsersByStatus)
routes.get("/user/:id",userController.getUserById)

module.exports = routes;