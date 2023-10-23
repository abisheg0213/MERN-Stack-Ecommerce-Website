import React from "react"
import "./cartitem.css"
import Footer from "./Footer"
import { Navbar } from "react-bootstrap"
import Navbarcom from "./Navbarcom"
import axios from "axios"
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom"
import Innernavbar from "./Innernavbar"
export default function Cartitem()
{
    const navi=useNavigate()
    const [cartitems,setcartitem]=React.useState([])
    React.useEffect(()=>
    {
        axios.get('http://localhost:5000/viewcart/'+auth.currentUser.uid).then((res)=>
        {
            setcartitem(res.data)
        })
    },[])
    function createcartitem(data)
    {
        return   <div className="cartitem-format">
        <img src={data.prodimg} class="prodimg">
        </img>
        <p>{data.prodname}</p>
        <p>{data.prod_new_price}</p>
        <button className="cartitems-quantity">+</button>
        <p>1</p>
        <button>-</button>
        </div>   
    }
    return<div> <Innernavbar/><div className="cart-item">
        
     <div className="cartitem-main">
     <p>Products</p>
     <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p></div>
        <hr/>
       {cartitems.map(createcartitem)}
       <button onClick={(e)=>
    {
        e.preventDefault()
        console.log(auth.currentUser.uid)
        navi('/checkout/'+auth.currentUser.uid)
    }} className="buy">Buy Now</button>
    </div><Footer/></div>
}