import './App.css';
import React from 'react';
import Navbarcom from './Components/Navbarcom';
import Productcard from './Components/Productcard';
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Display from './Components/Display';
import Popular from './Components/Popular';
import Footer from './Components/Footer';
import Axios from "axios"

import {Routes,Route} from "react-router-dom"
import Productdisplay from './Components/Productdisplay';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Cartitem from './Components/Cartitem';
import Checkout from './Components/Checkout';
import Orderconfirm from './Components/Orderconfirm';
import Orderdetails from './Components/Orderdetails';
import Orderdevi from './Components/Orderdevi';
function App() {
 
  return <div>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/deliver" element={<Orderdevi/>}/>
      <Route path="/orders/:id" element={<Orderdetails/>}/>
      <Route path="/checkout/:user_id" element={<Checkout/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/cart" element={<Cartitem/>}></Route>
      <Route path="/order-confirm" element={<Orderconfirm/>}></Route>
      <Route path="/product/:prodid" element={<Productdisplay/>}></Route>
    </Routes>
    </div>
  
}

export default App;
