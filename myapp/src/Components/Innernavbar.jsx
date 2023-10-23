import React from "react"
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
export default function Innernavbar()
{
    const navi=useNavigate()
    return <Navbar data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/profile">
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
            <Nav.Link href="#home">Men</Nav.Link>
            <Nav.Link href="#features">Women</Nav.Link>
            <Nav.Link href="#pricing">Kids</Nav.Link>
          </Nav>
          <button onClick={(e)=>
        {
            e.preventDefault()
            navi('/cart')

        }} className="login">Cart</button>
 
    <Button onClick={(e)=>
    {
      e.preventDefault()
      navi('/orders')
    }} className="cart" variant="outline-warning">
      Orders
      <span className="visually-hidden">unread messages</span>
    </Button>
        </Container>
      </Navbar>
}