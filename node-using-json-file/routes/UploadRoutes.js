const express = require("express")
const routes = express.Router()
const uploadController = require("../controllers/UploadController")

routes.post("/",uploadController.uploadFile)

module.exports = routes 