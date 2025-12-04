import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/Login.css";

export default function Login(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState("");
    const[color,setColor]=useState("");
    const navigate=useNavigate();

    //check session if already logged in
    useEffect(()=>{
        const sessionUser=sessionStorage.getItem("username");
        if(sessionUser){
            setColor("blue");
            setMessage(`Welcome back, ${sessionUser}! 🎉`);
        }
    },[]);

    //Login Handler
    const handleLogin=()=>{
        const storedUser=JSON.parse(localStorage.getItem("user"));

        if(!storedUser){
            setColor("red");
            setMessage("⚠ No user found! Please Sign Up first.");
            return;
        }

        if(username.trim()==="" || password.trim()===""){
            setColor("red");
            setMessage("⚠ Please fill all fields!");
            return;
        }

        if(
            username === storedUser.username &&
            password === storedUser.password
        ){
            sessionStorage.setItem("username", username);
            setColor("green");
            setMessage(`✅ Login successful! Welcome, ${username}`);
            
            setTimeout(()=>{
                navigate("/mainpage");
            },2000);
        }
        else{
            setColor("red");
            setMessage("❌ Invalid username or password!");
        }
    };

    return(
        <>
        <div className="login-box">
      <h2>✨ Culinary Suite ✨</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
      <p className="message" style={{ color: color }}>
        {message}
      </p>
    </div>
        </>
    );
}