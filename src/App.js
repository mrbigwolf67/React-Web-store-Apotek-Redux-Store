import React, { Component } from 'react';
import Home from './containers/Home';
import Products from './components/products/Products';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartPage from './components/cart/CartPage';


class App extends Component {
  render() {
    return (         
        <div>           
          <Navbar></Navbar>  
          <ToastContainer/>  
          <Switch>                   
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />         
          <Route path="/cartPage" component={CartPage} />  
          <Route render={() => <Redirect to="/" />} />
          </Switch>                                
        </div>
    );
  }
}

export default App;
