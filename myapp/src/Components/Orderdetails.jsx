import Card from 'react-bootstrap/Card';
import "./orderdetails.css"
import Innernavbar from './Innernavbar';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Orderdetails() {
    const {id}=useParams()
    const [orderdata,setodata]=React.useState([])
    React.useEffect(()=>{
        axios.get('http://localhost:5000/on-orders/'+id).then((res)=>
        {
            console.log(res.data)
            setodata(res.data)
        })
    },[])
    function createItem(data)
    {
        return  <Card className='order' body><h4>Order-Id : {data.orderid}</h4><hr/><p>UserId : {data.userid}</p><p>Address : {data.address}</p><p>Devilered : Not Delivered</p></Card>
    }
  return <div ><Innernavbar/>
  <h3 className='op'>Ongoing Orders:</h3>
  <Container><Row>
    <center>
    {orderdata.map(createItem)}
    </center></Row></Container><Footer/></div>;
}

export default Orderdetails;