import * as types from '../actions/actionTypes';

const initialState = { cart: [] }

const cartReducer = (state = initialState, action) => {   
    switch (action.type) {

    case types.GET_CART_SUCCESS:
        return {
            ...state, 
            cart: action.payload 
        };
    
        case types.CLEAR_LOCAL_STORAGE:
        return {
            ...state, 
            cart: action.payload  
        };

        case types.REMOVE_ITEM_FROM_LOCAL_STORAGE:        
            const newWithoutSelectedId = getCartFromLocalStorage().filter((item) => {
                return item.Id !== action.payload;
            }) 
            localStorage.setItem('cart', JSON.stringify(newWithoutSelectedId));
            
        return {
            ...state, 
            cart: newWithoutSelectedId.length === 0 ? null : newWithoutSelectedId 
        };

        case types.UPDATE_ITEM_LOCAL_STORAGE:
        return {
            ...state,
            cart: action.payload 
        };
    default:
        return state
    }

    function getCartFromLocalStorage() {
        return JSON.parse(localStorage.getItem('cart'));
      }
}

export default cartReducer
