const jwt = require("jsonwebtoken")
const secret = "parth"

// const verifyUser = (req,res,next) => {
//     const token = req.headers.authorization;

//     if(token){
//         if(token.startsWith("Bearer ")){
//             const token2 = token.split(" ")[1]

//             console.log(token2)

//             const user = jwt.verify(token2,secret)
//             req.user = user
//             next()
//         }else{
//             res.json({
//                 message : "Invalid Token"
//             })
//         }
//     }else{
//         res.json({
//             message : "Not a Bearer Token"
//         })
//     }

// }

// module.exports = {verifyUser}


const authenticate = (req, res, next) => {
    const accessToken = req.headers['authorization'];
    const refreshToken = req.cookies['refreshToken'];

    if (!accessToken && !refreshToken) {
        return res.status(401).send('Access Denied. No token provided.');
    }

    try {
        const decoded = jwt.verify(accessToken, secret);
        req.user = decoded.user;
        next();
    } catch (error) {
        if (!refreshToken) {
            return res.status(401).send('Access Denied. No refresh token provided.');
        }

        try {
            const decoded = jwt.verify(refreshToken, secret);
            const accessToken = jwt.sign({ user: decoded.user }, secret, { expiresIn: '1h' });

            res
                .cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' })
                .header('Authorization', accessToken)
                .send(decoded.user);
        } catch (error) {
            return res.status(400).send('Invalid Token.');
        }
    }
};

module.exports = {authenticate}