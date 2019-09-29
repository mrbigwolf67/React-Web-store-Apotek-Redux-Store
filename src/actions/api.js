import * as types from './actionTypes';

export const loadProducts = () => ({
  types: [types.GET_PRODUCTS_REQUEST , types.GET_PRODUCTS_SUCCESS, types.GET_PRODUCTS_FAILURE],
  callAPI: () =>
    fetch("http://apoteket-uppgift-fe.ginzburg.it/api/products")      
});
