import React from "react";
import Innernavbar from "./Innernavbar";
import Footer from "./Footer";
import "./orderconfirm.css"
export default function Orderconfirm()
{
    return <div>
        <Innernavbar/>
        <div className="confirm">
        <center>
            <h2>Order Confirmed</h2>
        </center>
        </div>
        <Footer/>
    </div>
}