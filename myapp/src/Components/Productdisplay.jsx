import React from "react";
import "./proddisplay.css"
import star_icon from "../Assets/star_icon.png"
import { Container } from "react-bootstrap";
import Navbarcom from "./Navbarcom";
import Footer from "./Footer";
import Axios from "axios";
import { useParams } from "react-router-dom";
export default function Productdisplay()
{
    const {prodid} =useParams()
    console.log(prodid)
    const [product,setproduct]=React.useState([{prodname:"",prod_desc:""}])
    React.useEffect(()=>
    {
        Axios.get('http://localhost:5000/product/'+Number(prodid)).then((res)=>
        {
            console.log(res.data)
            setproduct(res.data)
        })
    },[])
    return (<div><Navbarcom/><br/><div className="prod-display">
        <div className="prod-display-left">
            
            <img src={product[0].prodimg} alt="prod_image"></img>
            
        </div>
        <div className="prod-display-right">
            <h1>{product[0].prodname}</h1>
            <div className="prod-display-right-star">
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/><br/>
                    <p>(122)</p>
            </div>
            <div className="dis-price">
                <div className="price-old"><p>${product[0].prod_old_price}</p></div>
                <div className="price-new"><p>${product[0].prod_new_price}</p></div>
            </div>
            <div className="prod-display-sizes">
                <h2>Available Sizes :</h2>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <br />
            <div className="product-desc">
                {product[0].prod_desc}
            </div>
            <br />
            <button>ADD TO CART</button>
        </div>

    </div><Footer/></div>)
}