const jwt = require("jsonwebtoken")
const secret = "parth"

const verifyUser = (req,res,next) => {
    const token = req.headers.authorization;

    if(token){
        if(token.startsWith("Bearer ")){
            const token2 = token.split(" ")[1]

            console.log(token2)

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

}

module.exports = {verifyUser}