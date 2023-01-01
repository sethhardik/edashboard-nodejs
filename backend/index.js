// import necessary modules here
const express = require('express');
require("./db/config");
const User = require("./db/User");
const cors = require("cors")
// initialize app
const app = express();

// used to get the json body from api
app.use(express.json());
app.use(cors());

// register api
app.post("/register",async (req,resp)=>{
    let user= new User(req.body);
    let result = await user.save();
    // deleting password from the response json we are sending
    result = result.toObject();
    delete result.password;
    resp.send(result)
});

//  login api
app.post("/login",async(req,resp)=>{
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            resp.send(user)
        }else{
            resp.send({result:"no user found."})
        }
    }else{
        resp.send({result:"no user found"})
    }
    
})

// making app work on 5000 port
app.listen(5000)