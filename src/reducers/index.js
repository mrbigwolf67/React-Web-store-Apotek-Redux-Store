import { combineReducers } from 'redux'
import api from './api'
import cartProducts from './CartReducer'


const rootReducer = combineReducers({
	api, cart: cartProducts
});

export default rootReducer;