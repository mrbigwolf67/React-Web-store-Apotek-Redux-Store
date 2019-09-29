import React, {Component} from 'react'
import { isInStorage, saveProduct, getTotalCostInCart } from '../cart/Storage';
import { toast } from 'react-toastify';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {},
            isLoaded: false
        }
    }
    
    handleAddArticleClick = (id, price, name, picture) => {       

        const data = { Id: id, Price: price, Name: name, Pic: picture, Quantity: 1, isInstorage: true  };  
        const totalCost = getTotalCostInCart(data.Price);
       
        if(!isInStorage(id)) { 
            if(totalCost < 5000) {               
                saveProduct(data);
            } else {
                toast.error('Varukorgen överstiger nu 5000 kr, dvs ' + totalCost.toFixed(2));
            }         
                    
        } else {         
          toast.info('Varan finns redan i varukorgen', {
            position: toast.POSITION.TOP_CENTER,
            closeButton: false           
          });
        }               
     };

    render() {        
         const { article } = this.props;              
            return (
                <div style={ article.Buyable && article.Name ? {} : { display: 'none' }}>                                                                    
                    <article className="product" >                        
                        <h3>{article.Name}</h3>
                        <div className="img-container">                         
                            <img src={article.Pic} width="280" height="280" alt=" Ingen bild kunde hittas" className="product-img"/>                             
                                <button className="shopping-btn" data-id={article.Id} onClick={() => 
                                    this.handleAddArticleClick(article.Id, article.Price, article.Name, article.Pic)}>
                                    <i  className="fas fa-shopping-cart"></i>Lägg till 
                                </button>                                   
                        </div>
                        <h3>{article.Description}</h3>                    
                        <h4>{article.Price.toFixed(2)} kr</h4>
                    </article>                             
            </div>   
            )                                             
    };

}


export default Product