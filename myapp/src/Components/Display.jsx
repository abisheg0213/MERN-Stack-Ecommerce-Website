import React from "react"
import "./Hero.css"
import img from "../Assets/img.png"
export default function Display()
{
return <div className="hero">
    <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        
            <p>Collections</p>
            <p>For everyone</p>

    </div>
    <div className="hero-right">
        <img src={img} alt=""/>
    </div>
</div>
}