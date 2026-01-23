const express = require("express");
const app = express();


app.get("/test",(req,res)=>{
    console.log("test api called....")
    res.send("TEST API CALLED .... ")
});



const user = {
    id : 1,
    name : 'ram',
    age : 24,
};

app.get("/user",(req,res)=>{
    res.json({
        data : user,
        message : "User get successfully"
    })
});

const users = [
    {
        id : 1,
        name : 'arun',
        age : 25
    },
    {
        id : 2,
        name : 'ram',
        age : 21
    },
    {
        id : 3,
        name : 'shyam',
        age : 23
    },
    {
        id : 4,
        name : 'henil',
        age : 20
    },
    {
        id : 5,
        name : 'hinal',
        age : 28
    }
]


app.get("/users",(req , res)=>{
    res.json({
        data : users,
        message : "All users fetched successfully!"
    })
})


const languages = [
    {
        id : 1001,
        name : "Node JS"
    },
    {
        id : 1002,
        name : "JavaScript"
    },
    {
        id : 1003,
        name : "Express JS"
    },
    {
        id : 2003,
        name : "Android"
    },
    {
        id : 2006,
        name : "Unity"
    },
    {
        id : 2004,
        name : "IOS"
    },
    {
        id : 2005,
        name : "Flutter"
    },
    {
        id : 6557,
        name : "Java"
    },
    {
        id : 5567,
        name : "C"
    },
    {
        id : 5537,
        name : "C++"
    }
]


app.get("/languages",(req,res)=>{
    res.json({
        data : languages,
        message : "All languages fetched successfuly !"
    })
})


//server creation 
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server started on PORT ... ${PORT}`)
})

