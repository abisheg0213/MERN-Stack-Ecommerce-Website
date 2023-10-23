import React from "react";
import Navbarcom from './Navbarcom';
import Productcard from './Productcard';
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Display from './Display';
import Popular from './Popular';
import Footer from './Footer';
import Axios from "axios"
import {Routes,Route} from "react-router-dom"
import Productdisplay from './Productdisplay';
import { auth } from "../firebase-config";
export default function Home()
{
    function createitem(dataitem)
    {
      return <Productcard name={dataitem.prodname} id={dataitem.prodId} image={dataitem.prodimg} price={dataitem.prod_new_price} />
    }
    const [data,setdata]=React.useState([])
    React.useEffect(()=>
    {
      Axios.get('http://localhost:5000/products/popular').then((res)=>
      {
        console.log(res.data)
        setdata(res.data)
      })
    },[])
    return (
      <div>
         <Navbarcom/>
        <Display/>
        <center>
        <Popular/></center> 
        <Container>
          <Row>{data.map(createitem)}</Row></Container>  
      <Footer/></div>)
}
