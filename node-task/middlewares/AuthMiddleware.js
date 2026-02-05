const secret = "Innovate"
const jwt = require("jsonwebtoken")

const verifyUser = (req,res,next) => {
    const token = req.headers.authorization
    console.log(token)

    if(token){
        if(token.startsWith("Bearer ")){
            const token2 = token.split(" ")[1]

            const user = jwt.verify(token2,secret)
            req.user = user
            next()
        }else{
            res.json({
                message : "Invalid Token"
            })
        }
    }else{
        res.json({
            message : "Not a Bearer Token"
        })
    }
    next()
}

module.exports = {verifyUser}