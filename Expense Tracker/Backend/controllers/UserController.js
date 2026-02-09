const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');


const getData = () => {
    try {
        return JSON.parse(localStorage.getItem("data")) || [];

    }catch(err) {
        console.error("Getlocal",err)
    }
}


const addUsers = (req, res) => {
    const data = getData()
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword
    const newUser = req.body
    // const token = jwt.sign(newUser, secret)
    data.push(newUser)
    localStorage.setItem("data", JSON.stringify(data))
    res.json({
        data: newUser,
        token: token
    })
}


const loginUser = async (req, res) => {
    const data = getData();
    const { email, password } = req.body;

    const user = data.find(u => u.email === email);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // const accessToken = jwt.sign(
    //     { id: user.id, email: user.email },
    //     secret,
    //     { expiresIn: "15m" }
    // );

    // const refreshToken = jwt.sign(
    //     { id: user.id, email: user.email },
    //     secret2,
    //     { expiresIn: "7d" }
    // );

    res.json({ message: "Login successful" });
    // .cookie("accessToken", accessToken, {
    //     httpOnly: true,
    //     sameSite: "lax",
    //     secure: false,
    //     maxAge: 15 * 60 * 1000
    // })
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

module.exports = {
    loginUser,
    addUsers
}