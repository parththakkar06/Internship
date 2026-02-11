const jwt = require("jsonwebtoken")

const accessSecret = "parth"
const refreshSecret = "thakkar"


const signAccessToken = (payload) => {
    return jwt.sign(payload,accessSecret,{
        expiresIn : "15m",
    })
}

const signRefreshToken = (payload) => {
    return jwt.sign(payload,refreshSecret,{
        expiresIn : "30d"
    })
}

const verifyAccessToken = (token) => {
    return jwt.verify(token,accessSecret)
}


const verifyRefreshToken = (token) => {
    return jwt.verify(token , refreshSecret)
}


module.exports = {
    signAccessToken,
    signRefreshToken,
    verifyAccessToken,
    verifyRefreshToken
}