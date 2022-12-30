// import necessary modules here
const express = require('express')

// initialize app
const app = express()

//  creating my 1st route which just prints the message
app.get("/",(req,resp)=>{
resp.send("App is working fine.")
});

// making app work on 5000 port
app.listen(5000)