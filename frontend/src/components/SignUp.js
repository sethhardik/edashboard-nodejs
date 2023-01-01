import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
const Signup =()=>{
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    const navigate = useNavigate();
    //  function checks the local storage if user is there it removes the signup functionality for the user and redirects him to the main page
    useEffect(()=>{
            const auth= localStorage.getItem('user');
            if(auth){
                navigate("/")
            }
        })
    const collectdata=async ()=>{
        console.warn(name,email,password)
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                    'Content-Type': 'application/json'
                }
        });
        result = await result.json()
        console.warn(result);
        // save data in local storage using key and value pair
        localStorage.setItem("user", JSON.stringify(result))
        if(result){
            navigate('/')
        }
    }
    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectdata} className="regsiterbutton" type="button">Sign Up</button>
        </div>
    )
}

export default Signup