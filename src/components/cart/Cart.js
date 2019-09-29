import React, { Component } from 'react'
import emitter from 'event-emitter'
import { getNumberOfItemsInCart } from './Storage';

const eventEmitter = new emitter();

export const showNumberOfItems = (msg) =>  {
    eventEmitter.emit('item', msg);    
};
 
export class Cart extends Component { 
  constructor(props) {
    super(props);

    this.state = {        
        cartItems: 0        
    };

    eventEmitter.on('item', (msg) => {     
       this.handleMessageAndSetState(msg);   
    });  
}

componentDidMount() {
  const items = getNumberOfItemsInCart();
  this.handleMessageAndSetState(items);   
}

handleMessageAndSetState(msg) {
  this.setState({
    cartItems: msg,
})  
}

  render() {   
      return (
          <React.Fragment>                                    
              <div className="cart-items">{this.state.cartItems ? this.state.cartItems : 0}</div>      
          </React.Fragment>
      )
  }
}

export default Cart
