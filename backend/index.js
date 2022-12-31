// import necessary modules here
const express = require('express');
require("./db/config");
const User = require("./db/User");
// initialize app
const app = express();

// used to get the json body from api
app.use(express.json());

app.post("/register",async (req,resp)=>{
    let user= new User(req.body);
    let result = await user.save();
    resp.send(result)
});

// making app work on 5000 port
app.listen(5000)