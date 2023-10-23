import React from "react"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./product.css"
import { auth } from "../firebase-config";
import axios from "axios";
export default function Productcard(props)
{
  console.log(props.name)
  const navi=useNavigate()
    return  <Card className="custom-card" style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.image} alt="product_img" />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      {/* <Card.Text>Product Description</Card.Text> */}
      <p>${props.price}</p>
      <Button onClick={(e)=>
      {
        e.preventDefault()
        axios.post('http://localhost:5000/addtocart',{user_id:auth.currentUser.uid,prodid:props.id}).then((res)=>{
          console.log(res)
        })
      }} variant="outline-secondary">Add to Cart</Button>
      <Button onClick={(e)=>
      {e.preventDefault();
        console.log(props.name)
        let url="/product/"+props.id
        console.log("url"+url)
        navi(url)
      }} className="view" variant="outline-secondary">View Product</Button>
    </Card.Body>
  </Card>
}