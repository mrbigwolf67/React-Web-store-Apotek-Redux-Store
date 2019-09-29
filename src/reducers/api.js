import * as types from '../actions/actionTypes';

const initialState = { products: [], isLoading: false, error: {} }

const ui = (state = initialState, action) => {    
    switch (action.type) {

    case types.GET_PRODUCTS_REQUEST:
    return {
        ...state, // Kopierar existing state
        isLoading: true
    };

    case types.GET_PRODUCTS_SUCCESS:
        return {
            ...state,
            products: action.response,
            isLoading: false 
        };

    case types.GET_PRODUCTS_FAILURE:
    return {
        ...state,
        error: action.error,
        isLoading: false 
    };  

    default:
        return state
    }
}

export default ui