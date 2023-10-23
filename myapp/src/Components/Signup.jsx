import React from "react";
import { Button, Navbar } from "react-bootstrap";
import Navbarcom from "./Navbarcom";
import Footer from "./Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import "./form.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup()
{
    const navi=useNavigate()
    const [uname,setuname]=React.useState("")
    const [email, setemail] = React.useState("");
  const [pass, setpass] = React.useState("");
    return <div>
        <Navbarcom/>
        <br/>
        <center>
            <h3 className="log">Sign Up</h3>
            <form className="lo"> <label>UserName : </label>
            <input onChange={(e)=>{
                setuname(e.target.value)
            }} type="text"></input>
            <br/><br/>
            <label>Email : </label>
            <input  onChange={(e)=>{
                setemail(e.target.value)
            }}  type="email"></input>
            <br/><br/>
            <label>Password : </label>
            <input  onChange={(e)=>{
                setpass(e.target.value)
            }}  type="password"></input>
            <br/>
<br />
            <Button  onClick={(e) => {
              e.preventDefault();
              createUserWithEmailAndPassword(auth, email, pass)
                .then((user) => {
                  console.log(user.user.uid);
                  let usid=user.user.uid
                  console.log(usid)
                  axios.post('http://localhost:5000/create_user',{username:uname,userid:usid}).then((res)=>{
                    console.log(res)
                  })
                  navi('/login')
                })
                .catch((err) => {
                  console.log(err);
                });
            }} variant="outline-dark">SignUp</Button>
            </form></center>
        <Footer/>
    </div>
}