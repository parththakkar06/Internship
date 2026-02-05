const secret = "Innovate"
const jwt = require("jsonwebtoken")

const verifyUser = (req,res,next) => {
    const token = req.cookies?.token
    // const token = req.headers.authorization
    console.log(token)

    if(token){
            const user = jwt.verify(token,secret)
            req.user = user
            next()
        }else{
            res.json({
                message : "Invalid Token"
            })
        }
    
    next()
}

module.exports = {verifyUser}