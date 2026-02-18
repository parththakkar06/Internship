const JSEncrypt = require("jsencrypt");

const fs = require("fs")


const publicKey = fs.readFileSync("./public.pem", "utf-8")
const privateKey = fs.readFileSync("./private.pem", "utf-8")


const encryptData = (req, res) => {
    const { userId , userName} = req.body
    const expIn = Date.now() + 5000 * 1000;
    const dataaaaa = {
        userId : userId,
        userName : userName,
        expIn : expIn
    }
    const data = JSON.stringify(dataaaaa)
    
    const crypt = new JSEncrypt()
    crypt.setPublicKey(publicKey)
    crypt.setPrivateKey(privateKey)
    const encryptedData = crypt.encrypt(data)
    const DigitalSignature = crypt.signSha256(data)


    res.json({
        message: "Data Encrypted with Digital Signature",
        // encryptedData : encryptedData,
        // decryptedData : dData,
        URL : `http://localhost:3000/validate?data=${encodeURIComponent(encryptedData)}&sig=${encodeURIComponent(DigitalSignature)}`,
        // DigitalSignature : DigitalSignature,
        signatureMadeBy : data
    })
}


const decryptData = (req, res) => {

    res.json({
        Message : "Welcome To The URL"
    })
}

module.exports = {
    encryptData,
    decryptData
}