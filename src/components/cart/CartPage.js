import React, {Component} from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { PropTypes } from "prop-types";
import CartItem from './Cart-item';
import './cart.css';
import { getCartFromStorage, 
         clearLocalStorage, 
         updateItemInLocalStorage,
         removeItemFromLocalStorage } from '../../actions/cartActions';

class CartPage extends Component { 

static propTypes = {       
  cart: PropTypes.array,
  getCartFromStorage: PropTypes.func.isRequired,
  clearLocalStorage: PropTypes.func.isRequired,
  updateItemInLocalStorage: PropTypes.func.isRequired,
  removeItemFromLocalStorage: PropTypes.func.isRequired
};

  componentDidMount() {     
      this.props.getCartFromStorage();                   
  }   

  getUpdatedItemAndSendInfoToStore = (item) => {   
    this.props.updateItemInLocalStorage(item.Id, item.Quantity)
  }

  deleteItemFromCart = (id) => {
    this.props.removeItemFromLocalStorage(id);
  }
  
  clearCartPage() {   
    this.props.clearLocalStorage();
  }

   render() {
    const  articles  = this.props.cart;   
    let totalAmountInCart = 0;
    
    if(articles !== null && articles !== undefined) {
      articles.forEach((item) => {
        totalAmountInCart += (item.Price * item.Quantity);        
      });
    }
   
    if (articles === null || articles === undefined) {
      return (
        <div>
          <div className="cart-footer">
            <h3>Total kostnad: <span className="cart-total">{totalAmountInCart.toFixed(2)} kr</span></h3>
            <button className="clear-cart" >Varukorgen är tom</button>
        </div> 
        </div> 
      )
    }
    return (  
      <div>
        <div className="cart-content">     
            {articles.map((article) => (           
                <CartItem cartItem={article} key={article.Id} 
                  updateCartPageWithUpdatedItem={this.getUpdatedItemAndSendInfoToStore}
                  updateCartpageWithDeletedItem={this.deleteItemFromCart}></CartItem>                      
            ))}                                  
        </div> 
        <div className="cart-footer">
            <h3>Total kostnad: <span className="cart-total">{totalAmountInCart.toFixed(2)} kr</span></h3>
                                  
             <Link to="/products">  
               <button  className="banner-btn"><i className="fas fa-arrow-left"></i> Fortsätt handla</button>  
             </Link>          
               <button  className="banner-btn" onClick={() => 
                  this.clearCartPage()}>Rensa varukorgen</button>                   
      </div>
      </div>                
    )
   }
    
}

const mapStateToProps = state => ({    
  cart: state.cart.cart
  });
   
export default connect (
  // which state should I expose as props ? => mapStateToProps subscribes to updates on the props
    mapStateToProps,
    { // med vilken Action vill jag connecta dvs function
      getCartFromStorage,
      clearLocalStorage,
      updateItemInLocalStorage,
      removeItemFromLocalStorage  
    }
) (CartPage)
