const fs = require("fs")
const JSEncrypt = require("jsencrypt")


const publicKey = fs.readFileSync("./public.pem", "utf-8")
const privateKey = fs.readFileSync("./private.pem", "utf-8")

const validation = (req,res,next) => {
        const encodedData = req.query.data
        const encodedSign = req.query.sig
    
        const DigitalSignature = decodeURIComponent(encodedSign)
    
        const encryptedData = decodeURIComponent(encodedData)
        const dcrypt = new JSEncrypt()
        dcrypt.setPrivateKey(privateKey)
        const decryptedData = dcrypt.decrypt(encryptedData)
        const dData = JSON.parse(decryptedData)
    
    
        const verify = new JSEncrypt()
        verify.setPublicKey(publicKey)
        verify.setPrivateKey(privateKey)
        const verified = verify.verifySha256(decryptedData,DigitalSignature)
        
        if(verified){

            exDate = dData.expIn
            console.log(exDate)
            console.log(Date.now())
            if(Date.now() > exDate){
                res.json({
                    message : "Link Expired"
                })
            }else {
                next()
            }
        }else{
            res.json({
                message : "Digital Signature is Invalid"
            })
        }
}


module.exports = {validation}