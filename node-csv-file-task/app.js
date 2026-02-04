const express = require("express")
const app = express()
const csv = require("fast-csv")
const fs = require("fs")
const path = require("path")


app.use(express.json())


app.get("/read-csv", (req, res) => {

    if (!fs.existsSync("User_Data.csv")) {
        return res.json({ message: "CSV FILE NOT FOUND" })
    }

    let dataFromCSV = []

    const options = { headers: true, trim: true }
    fs.createReadStream(path.resolve(__dirname, "User_Data.csv"))
        .pipe(csv.parse(options))
        .on('error', err => console.log(err))
        .on('data', row => dataFromCSV.push(row))
        .on('end', (rowCount) => {
            console.log(dataFromCSV)

            console.log(`Parse ${rowCount} rows`)
            res.json({
                message: "Data is Extracted Sucessfully",
                data: dataFromCSV
            })
        })

})

const getCategory = (salary) => {
    if(salary >= 60000){
        return "High"
    }else if(salary <= 59999 && salary >= 45000){
        return "Medium"
    }else{
        return "Low"
    }
}

app.get("/process-csv", (req, res) => {

    let dataFromCSV = []
    let salaryByDept = {}
    let AgeByDept = {}

    const options = { headers : true , trim : true}

    fs.createReadStream(path.resolve(__dirname, "User_Data.csv"))
        .pipe(csv.parse(options))
        .on("error", err => console.log(err))
        .on("data", (row) => {
            try{

                const {UserID , Gender , Age , Salary , Department} = row;

                if(!UserID || !Gender || !Age || !Salary || !Department){
                    throw new Error("Missing Columns")
                }

                const age = Number(Age)
                const salary = Number(Salary)
                const id = Number(UserID)

                if(isNaN(age) || isNaN(salary) || isNaN(id)){
                    throw new Error("Invalid Data Types Detected")
                }

                if (age < 25) 
                    return

                const category = getCategory(salary)

                dataFromCSV.push({
                    id,
                    Gender,
                    age,
                    salary,
                    Department,
                    category
                })

                salaryByDept[Department] = (salaryByDept[Department] || 0) + salary
                if(!AgeByDept[Department]){
                    AgeByDept[Department] = {count : 0, total : 0}
                }

                AgeByDept[Department].total += age
                AgeByDept[Department].count += 1

            }catch(err){
                console.error("Error Detected : ",err.message)
            }
        })
        .on('end', (rowCount) => {

            console.log(`Parse ${rowCount} rows`)
            res.json({  
                message: "Data is Extracted Sucessfully",
                data: dataFromCSV
            })
        })
})
//server

const PORT = 3000
app.listen(PORT, () => {
    console.log("Server running on port - ", PORT)
})