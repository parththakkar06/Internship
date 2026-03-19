const jwt = require("jsonwebtoken")
const secret = "source"


const authMiddleware = (req,res,next) => {
    const token = req.cookies.token
    if(!token){ 
        return res.status(401).json({
            message : "Not Logged In"
        })
    }

    try{
        const decoded = jwt.verify(token,secret)
        console.log("decoded .. ",decoded)
        req.user = decoded
        // console.log(req)
        next()
    }catch(err){
        res.status(401).json({
            message : "Invalid Token"
        })
    }
}

module.exports = authMiddleware