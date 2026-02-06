const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "parth"
// const secret2 = "thakkar"

// if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
// }

const getTransactions = () => {
    try {
        return JSON.parse(localStorage.getItem("transactions")) || [];

    }catch(err) {
        console.error("Getlocal",err)
    }
}

const getID = () => {
    try {
        return JSON.parse(localStorage.getItem("id")) || 1;
    }catch(err) {
        console.error("Getlocal",err)
    }
}

const getAllTransactions = (req, res) => {
    const transactions = getTransactions()
    res.json({ transactions })
}


const addTransactions = (req, res) => {
    const data = getTransactions()
    let id = getID()
    console.log(data)
    req.body.id = id++;
    // console.log(req.body)
    // const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    // req.body.password = hashedPassword
    // const newUser = req.body
    // const token = jwt.sign(newUser, secret)
    data.push(req.body)
    localStorage.setItem("transactions", JSON.stringify(data))
    res.json({
        message : "Transaction Added."
        // token: token
    })
}


// const getUserById = (req, res) => {
//     const data = getData()
//     const id = req.params.id
//     const foundUser = data.filter(u => u.id == id)
//     console.log(foundUser)
//     const hash = md5(foundUser)
//     if (foundUser.length > 0) {
//         res.json({
//             message: "User Found!",
//             data: foundUser,
//             hasheddata: hash
//         })
//     } else {
//         res.json({
//             message: "User Not Found!"
//         })
//     }
// }


// const deleteUserById = (req, res) => {
//     const data = getData()
//     const id = req.params.id
//     const index = data.findIndex(u => u.id == id)
//     const deletedUser = data.filter(u => u.id == id)
//     if (index !== -1) {
//         data.splice(index, 1)
//         localStorage.setItem("data", JSON.stringify(data))
//         res.json({
//             message: "User Deleted Successfully",
//             data: deletedUser
//         })
//     }
// }

// const updateUser = (req, res) => {
//     const data = getData()
//     const id = req.params.id
//     const index = data.findIndex(u => u.id == id)
//     if (index !== -1) {
//         data[index] = req.body;
//         localStorage.setItem("data", JSON.stringify(data))
//         res.json({
//             message: "User Updated Successfully",
//             data: req.body
//         })
//     }
// }


// const loginUser = async (req, res) => {
//     const data = getData();
//     const { email, password } = req.body;

//     const user = data.find(u => u.email === email);
//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     const valid = await bcrypt.compare(password, user.password);
//     if (!valid) {
//         return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const accessToken = jwt.sign(
//         { id: user.id, email: user.email },
//         secret,
//         { expiresIn: "15m" }
//     );

    // const refreshToken = jwt.sign(
    //     { id: user.id, email: user.email },
    //     secret2,
    //     { expiresIn: "7d" }
    // );

    // res.json({ message: "Login successful" });
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
// };


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
    getAllTransactions,
    addTransactions,
    // getUserById,
    // deleteUserById,
    // updateUser,
    // loginUser,
    // refreshUserToken
}