const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userModel = require("../models/UserModel")
const secret = "source"

const addUsers = async (req, res) => {
    try {
        console.log("here")
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        req.body.password = hashedPassword
        const newUser = req.body
        const savedUser = await userModel.create(newUser)
        // const token = jwt.sign(newUser, secret)

        res.json({
            data: savedUser,
            // token: token
        })
    } catch (err) {
        res.json({
            message: "Problem occured while adding user",
            error: err.message
        })
    }
}

const verifyUser = async(req,res) => {
    console.log("req ... ",req.user)
    const user = await userModel.findById(req.user.id).select('-password -age')
    console.log("user ... ",user)
    res.json({user})
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({email});
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
        { id: user._id, email: user.email },
        secret,
        { expiresIn: "1d" }
    );

    // const refreshToken = jwt.sign(
    //     { id: user.id, email: user.email },
    //     secret2,
    //     { expiresIn: "7d" }
    // );
    res.cookie("token", accessToken, {
        httpOnly: true,
        sameSite: "Lax",
        secure: false,
        // maxAge: 15 * 60 * 1000
    })
    res.json({ message: "Login successful" })
    
    // .cookie("refreshToken", refreshToken, {
    //     httpOnly: true,
    //     sameSite: "lax",
    //     secure: false,
    //     maxAge: 7 * 24 * 60 * 60 * 1000
    // })
};


// const userProfile = (req, res) => {
//     res.json({
//         message: "Protected User",
//         data: req.user
//     })
// }

// const refreshUserToken = (req, res) => {
//     const refreshToken = req.cookies['refreshToken'];
//     if (!refreshToken) {
//         return res.status(401).send('Access Denied. No refresh token provided.');
//     }

//     try {
//         const decoded = jwt.verify(refreshToken, secret);
//         const accessToken = jwt.sign({ user: decoded.user }, secret, { expiresIn: '1h' });
//         res
//             .header('Authorization', accessToken)
//             .send(decoded.user);
//     } catch (error) {
//         return res.status(400).send('Invalid refresh token.');
//     }
// }

const logoutUser = (req,res) => {
    console.log('hi')
    res.clearCookie('token')
    res.json({
        message : "Logged Out"
    })
}

module.exports = {
    loginUser,
    addUsers,
    verifyUser,
    logoutUser
}