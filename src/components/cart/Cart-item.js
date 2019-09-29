import React, {Component} from 'react';
import { getTotalCostInCart } from '../cart/Storage';
import { toast } from 'react-toastify';

class CartItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cartItem: this.props
        }
    }
    componentDidMount() {                  
     };

     removeItemFromCart(id) {               
       this.props.updateCartpageWithDeletedItem(id);
     }

     increaseItemsInCart = (item) => { 
        const totala = getTotalCostInCart(item.Price); 
        if(totala < 5000) {            
            item.Quantity += 1; 
            this.props.updateCartPageWithUpdatedItem(item); 
            this.setState({ item });    
        } else {
            toast.error('Varukorgen överstiger nu 5000 kr, dvs ' + totala.toFixed(2) );
        }       
           
     }

     decreaseItemsInCart = (item) => {                       
        if(item.Quantity > 1){
            item.Quantity -= 1;  
            this.setState({ item });
            this.props.updateCartPageWithUpdatedItem(item);            
        }             
       }

    render() {        
         const { cartItem } = this.state.cartItem;            
                            
            return (
                <div>                                                                                 
                    <div className="cart-item">
                        <img src={cartItem.Pic} alt=""/>
                            <div>
                            <h4>{cartItem.Name}</h4>
                            <h5>{cartItem.Price.toFixed(2)} kr</h5>
                            <span className="remove-item" onClick={() => 
                                this.removeItemFromCart(cartItem.Id)}>Ta bort</span> 
                            </div>
                            <div>
                            <i className="fas fa-plus-circle"  onClick={() => 
                                this.increaseItemsInCart(cartItem)}></i>
                            <p className="item-amount">{cartItem.Quantity}</p>
                            <i className="fas fa-minus-circle" onClick={() => 
                                this.decreaseItemsInCart(cartItem)}></i>
                            </div>
                    </div>                                     
            </div>                         
            )                         
    };
}

export default CartItem    