const express = require("express")
const routes = express.Router()
const securityController = require("../controllers/SecurityController")
const securityMiddleware = require("../middlewares/SecutiryMiddleware")

routes.post("/encrypt-text",securityController.encryptData)
routes.get("/validate",securityMiddleware.validation,securityController.decryptData)


module.exports = routes