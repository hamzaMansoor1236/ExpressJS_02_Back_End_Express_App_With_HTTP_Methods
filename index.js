const express= require("express");

const app= express();

var bodyParser = require('body-parser')



app.use(bodyParser.json())










const users= [{id:1,Name:"Hamza"},{id:2,Name:"Haroon"},{id:3,Name:"Badar"}]


const port =5000;

//route to get all the users
app.get("/users",(req,res,next)=>{

    res.send(users)
    next();
   

})


//route to add new user to the array
app.post("/users",(req,res)=>{


    

    if(req.body===undefined){
        res.send("User cannot be created No body found in the request ")
    }
    else{
        console.log(req.body)
        users.push(req.body);
            console.log(users)
        res.send("User created successfully")
    }
    

    

})

app.listen(port ,()=>{
    console.log("App running at port 5000   link http://localhost:5000/");
})