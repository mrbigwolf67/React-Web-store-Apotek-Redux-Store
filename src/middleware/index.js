import thunk from 'redux-thunk'
import api from './api'
import cart from './cart'

export const middlewares = [thunk, api, cart]
