import React, { Component } from 'react'
import './navbar.css'
import logo from  '../../assets/apoteket.png'
import { Link } from "react-router-dom";
import Cart from '../cart/Cart';

export class Navbar extends Component {
  
  render() {     
    return (
        <nav className="navbar">
        <div className="navbar-center">            
         <Link to="/">
          <img src={logo} alt="" width="200" height="30"/>
          </Link> 
          <Link to="/cartPage">         
          <div className="cart-btn">
            <span className="nav-icon">
              <i className="fas fa-cart-plus"></i>
            </span>
            <Cart></Cart>   
          </div>  
          </Link>       
        </div>
      </nav>
    )
  }
}

export default Navbar
