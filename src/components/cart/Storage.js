import { showNumberOfItems } from '../cart/Cart';

let cartArray = [];

export function getCartFromStorage() {
    return JSON.parse(localStorage.getItem('cart'));
}

export function saveProduct(product) {     
    cartArray =  getCartFromStorage(); 
    if(cartArray !== null) {
        cartArray.push(product)        
    } else {
        cartArray = [];
        cartArray.push(product);
    }
    saveToLocalStorage(cartArray);
    showNumberOfItems(getNumberOfItemsInCart().toString());   
}

export function getNumberOfItemsInCart() {
    cartArray =  getCartFromStorage(); 
    let items = 0;
    if(cartArray !== null && cartArray){
        cartArray.forEach((item) => {
            items += item.Quantity; 
        })
    };
    return items;    
}

export function getTotalCostInCart(itemPrice) {
    cartArray =  getCartFromStorage(); 
    let total = itemPrice;
    if(cartArray !== null && cartArray){
        cartArray.forEach((item) => {
            total += item.Price * item.Quantity; 
        })
    };
    return total;    
}

export function isInStorage(id) {  
    cartArray = getCartFromStorage();
    if(cartArray !== null) { 
       return find(id, cartArray)
    }
}

function find(id, cart) {   
    let match = cart.filter(item => {
        if(item.Id === id) {
            return true;
        } else {
            return false;
        }
        
    });
    if(match && match[0]) {
        return match[0]
    }
};

function saveToLocalStorage(items) {
    localStorage.setItem('cart', JSON.stringify(items));
}
