import React from "react";
import { Navbar } from "react-bootstrap";
import Footer from "./Footer";
import Navbarcom from "./Navbarcom";
import "./devi.css"
import axios from "axios";
export default function Orderdevi()
{
    const [order,setorder]=React.useState("")
    const [clicked,setclick]=React.useState(false)
    const [otp,setotp]=React.useState("")
    const [data,setdata]=React.useState([])
    const [reqotp,setreqotp]=React.useState("")
return <div className="devilary"><Navbarcom/><br/>
<center>
    <label>Order ID :</label>
    <input onChange={(e)=>
    {
        console.log(e.target.value)
        setorder(e.target.value)
    }} type="text"></input><button onClick={(e)=>
        {
            axios.get("http://localhost:5000/order/"+order).then((res)=>
            {
                console.log(res.data)
                console.log(res.data[0].time.slice(2,7))
                setreqotp(res.data[0].time.slice(2,7))
                setdata(res.data)
            })
            setclick(true)
        }}>Sumbit</button><br/>
        {clicked?<div><br/><p>Order Id :</p>
        <label>OTP : </label><input onChange={(e)=>
        {
            console.log(e.target.value)
            setotp(e.target.value)
            console.log(otp)
        }} type="text"></input><br/>{otp===reqotp?<div><br/><button onClick={(e)=>
        {
            e.preventDefault()
            axios.post("http://localhost:5000/order_delivered",{order_id:order})
        }}>Order Delivered</button></div>:<></>}</div>:<></>}</center>
    
        <br/>
    
        <Footer/></div>
}