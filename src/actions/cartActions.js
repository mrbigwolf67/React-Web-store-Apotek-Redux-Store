import * as types from './actionTypes';
import { showNumberOfItems } from '../components/cart/Cart';

let cartArray = [];
   
export const getCartFromStorage = () => {  
    const cartArray = JSON.parse(localStorage.getItem('cart'));     
    return (dispatch) => {         
     dispatch(
       {
        type: types.GET_CART_SUCCESS,
        payload: cartArray
      }
     ); 
    }
  }

  export const removeItemFromLocalStorage = (id) => {    
    return (dispatch) => {   
     dispatch(
       {
        type: types.REMOVE_ITEM_FROM_LOCAL_STORAGE,
        payload: id
      }
     );
     showNumberOfItems(getNumberOfItemsInCart().toString()); 
    }
  }

  export const clearLocalStorage = () => {
    localStorage.clear('cart');
    showNumberOfItems('0');
    return (dispatch) => {   
     dispatch(
       {
        type: types.CLEAR_LOCAL_STORAGE,
        payload: null
      }
     ); 
    }
  }

  export const updateItemInLocalStorage = (id, quantity) => {
    cartArray = getCartFromLocalStorage();     
    cartArray.find((item) => {
        if(item.Id === id) {
           item.Quantity = quantity;
        }       
    });    
    localStorage.setItem('cart', JSON.stringify(cartArray));
    showNumberOfItems(getNumberOfItemsInCart().toString());
    return (dispatch) => {   
      dispatch(
        {
         type: types.UPDATE_ITEM_LOCAL_STORAGE,
         payload: cartArray
       }
      ); 
     }   
}

function getNumberOfItemsInCart() {
  cartArray =  getCartFromLocalStorage(); 
  let items = 0;
  if(cartArray !== null && cartArray){
      cartArray.forEach((item) => {
          items += item.Quantity; 
      })
  };
  return items;    
}

function getCartFromLocalStorage() {
  return JSON.parse(localStorage.getItem('cart'));
}
