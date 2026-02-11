const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    filename: (req,file,cb) => {
        cb(null,file.originalname)
    },
})

const fileFilter = (req,file,cb) => {
    const allowedTypes = /jpeg|jpg|png/
    const ext = path.extname(file.originalname).toLowerCase()
    if(allowedTypes.test(ext)){
        cb(null, true)
    }else { 
        cb(new Error("Only .jpg, .jpeg, .png files are allowed"), false)
    }
}

const upload = multer({
    storage,
    fileFilter
})
 
module.exports = upload;