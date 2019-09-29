import PropTypes from "prop-types";
import React, { Component } from 'react'
import { connect } from "react-redux";
import Product from "./Product";
import { loadProducts } from "../../actions/api";


export class Products extends Component {
    static propTypes = {        
        products: PropTypes.array.isRequired,      
        isLoading: PropTypes.bool
      };
     
  componentDidMount() { 
    const { products } = this.props;
    if(products.length === 0) {
      this.props.loadProducts()
      .catch(error => {
        alert("Hämtning av produkterna misslyckades, försök igen" + error);
      })   
    }                         
  }

  render() {  
         
    if (this.props.isLoading) {
      return (
          <div className="section-spinner">              
           <img src={require("../../assets/spinner.svg")} alt=""></img>
          </div>   
      )
    }
    return (
      <div>      
         <div className="section-title">
            <h2>Produkter</h2>
          </div>           
          <section className="products">                                            
              <div className="products-center">
              {this.props.products.map((product) => (   
              <Product article={product} key={product.Id}></Product>  
              ))}
            </div>            
          </section>       
      </div>     
    )
  }
}

const mapStateToProps = state => ({
  products: state.api.products, 
  isLoading: state.api.isLoading
  });
  
export default connect (
    mapStateToProps,
    {
      loadProducts  
    }
) (Products)
