import React from "react";
import Footer from "./Footer";
import Navbarcom from "./Navbarcom";
import "./checkout.css"
import { Button } from "react-bootstrap";
import { auth } from "../firebase-config";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Innernavbar from "./Innernavbar";
export default function Checkout()
{
    const navi=useNavigate()
    const {user_id}=useParams()
    const [totalprice,setprice]=React.useState(0)
    const [dev_name,setdevname]=React.useState("")
    const [house,sethouse]=React.useState("")
    const [street,setstreet]=React.useState("")
    const [city,setcity]=React.useState("")
    const [email,setemail]=React.useState("")
    function createcartitem(data)
    {
        return   <div className="cartitem-format">
        <p>{data.prodname}</p>
        <p>1</p>
        <p>{data.prod_new_price}</p>
        <br/>
        </div>   
    }
    const [cartitems,setcartitem]=React.useState([])
    React.useEffect(()=>
    {
        axios.get('http://localhost:5000/viewcart/'+user_id).then((res)=>
        {
            setcartitem(res.data)
            let amt=0
            for(let i=0;i<res.data.length;i++)
            {
                amt=amt+res.data[i].prod_new_price
            }
            setprice(amt)
        })
    },[])
    return<div><Innernavbar/><br/><div className="prod-display">
    <div className="prod-display-left">
        
      <form>
      <h2>Devilary Details</h2><br/>
        <label>Devilary Name :</label>
        <input onChange={(e)=>
        {
            setdevname(e.target.value)
        }} type="text"></input>
        <br /><br/>
        <label>House No :</label>
        <input onChange={(e)=>
        {
            sethouse(e.target.value)
        }} type="text"></input>
        <br /><br/>
        <label>Street Name :</label>
        <input onChange={(e)=>
        {
            setstreet(e.target.value)
        }} type="text"></input>
        <br /><br/>
        <label>City :</label>
        <input onChange={(e)=>
        {
            setcity(e.target.value)
        }} type="text"></input>
        <br /><br/>
        <label>Country :</label>
        <select>
            <option>India</option>
            <option>Australia</option>
        </select>
        <br /><br/>
        <label>Email :</label>
        <input onChange={(e)=>
        {
            setemail(e.target.value)
        }} type="email"></input>
        <br /><br/>
        <label>Phone Number :</label>
        <input type="Number"></input>
      </form>
        
    </div>
    <div className="prod-display-right">
       <div className="cartCard">
        <h4>Your Order</h4>
        <hr/>
        <div className="cartitem-main">
     <p>Products</p>
     <p>Quantity</p>
        <p>Total Price</p>
        
        <hr/>
        <br/>
        <br/>
        
       </div>
       <div>
        {cartitems.map(createcartitem)}</div>
       <p> Total : ${totalprice}</p>
       <p> Shipping Charges : $20</p>
       <p> Discount : $3.50</p>
        <p>Final Amount--${totalprice+20-3.5}</p>
       <button onClick={(e)=>
    {
        e.preventDefault()
        var ts=new Date().getTime()
        console.log(typeof(ts))
        let oid=String(ts).slice(-6,-1)+user_id.slice(0,5)
        let adr=dev_name+"\n"+house+"\n"+street+"\n"+city
        axios.post('http://localhost:5000/create_order',{userid:user_id,prods:cartitems,order_id:oid,timestamp:ts,add:adr})
        navi('/order-confirm')
    }}   className="cartbutton">Pay</button>
    </div>

</div>
<br/></div><Footer/></div> 
}