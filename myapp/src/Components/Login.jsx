import React from "react";
import { Button, Navbar } from "react-bootstrap";
import Navbarcom from "./Navbarcom";
import Footer from "./Footer";
import "./form.css"
import {useNavigate} from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
export default function Login()
{
    const [email,setemail]=React.useState("")
    const [pass,setpass]=React.useState("")
    const navi=useNavigate()
    return <div>
        <Navbarcom/>
        <br/>
        <center>
            <h3 className="log">Log In</h3>
            <form className="lo">
            <label>Email : </label>
            <input onChange={(e)=>{
                setemail(e.target.value)
            }}  type="email"></input>
            <br/><br/>
            <label>Password : </label>
            <input onChange={(e)=>{
                setpass(e.target.value)
            }}  type="password"></input>
            <br/>
            <br/>
            <a href="/signup">Sign Up For New User</a>
            <br/>
            <br/>
            <Button onClick={(e) => {
              e.preventDefault();
              signInWithEmailAndPassword(auth, email, pass)
                .then((user) => {
                  console.log(user);
                navi('/profile')
                })
                .catch((err) => {
                  console.log(err);
                });
            }} variant="outline-dark">Login</Button>
            </form></center>
        <Footer/>
    </div>
}