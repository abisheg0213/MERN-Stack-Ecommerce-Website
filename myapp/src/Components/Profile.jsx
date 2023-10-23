import React from "react";
import Navbarcom from './Navbarcom';
import Productcard from './Productcard';
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Display from './Display';
import Popular from './Popular';
import Footer from './Footer';
import Axios from "axios"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
export default function Profile()
{
  function renderswitch (key) {
    switch(key){
      case 'men':
        return mendata.map(createitem)
      case 'women':
        return womendata.map(createitem)
      case 'popular':
        return popdata.map(createitem)
      default:
        return popdata.map(createitem)



  }}
  const [select,setSelect]=React.useState("")
  const navi=useNavigate()
    function createitem(dataitem)
    {
      return <Productcard name={dataitem.prodname} id={dataitem.prodId} image={dataitem.prodimg} price={dataitem.prod_new_price} />
    }
    const [popdata,setpopdata]=React.useState([])
    const [mendata,setmendata]=React.useState([])
    const [womendata,setwomendata]=React.useState([])
    React.useEffect(()=>
    {
      Axios.get('http://localhost:5000/products/popular').then((res)=>
      {
        console.log(res.data)
        setpopdata(res.data)
      })
      Axios.get('http://localhost:5000/products/men').then((res)=>
      {
        console.log(res.data)
        setmendata(res.data)
      })
      Axios.get('http://localhost:5000/products/women').then((res)=>
      {
        console.log(res.data)
        setwomendata(res.data)
      })
    },[])
    return (
      <div>
         <Navbar data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://png.pngtree.com/png-vector/20220207/ourmid/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            E-Shopper
          </Navbar.Brand>
          {"                    "}

          <Nav className="me-auto">
            <Nav.Link onClick={(e)=>
            {
              e.preventDefault()
              setSelect("men")
            }} href="#home">Men</Nav.Link>
            <Nav.Link onClick={(e)=>
            {
              e.preventDefault()
              setSelect("women")
            }} href="#features">Women</Nav.Link>
            <Nav.Link onClick={(e)=>
            {
              e.preventDefault()
              setSelect("popular")
            }} href="#pricing">Home</Nav.Link>
          </Nav>
          <button onClick={(e)=>
        {
            e.preventDefault()
            navi('/cart')

        }} className="login">Cart</button>
 
    <Button onClick={(e)=>
    {
      e.preventDefault()
      navi('/orders/'+auth.currentUser.uid)
    }} className="cart" variant="outline-warning">
      Orders 
      <span className="visually-hidden">unread messages</span>
    </Button>
        </Container>
      </Navbar>
        <Display/>
        <center>
        <Popular/></center> 
        <Container>
          <Row>{
        renderswitch(select)
          }</Row></Container>  
      <Footer/></div>)
}
