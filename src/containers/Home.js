import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
 
  componentDidMount() {}

  render() {
    return (              
        <div className="hero">
          <div className="banner">
            <h1 className="banner-title">Produkter</h1>
            <Link to="/products">
              <button className="banner-btn">Lista produkter</button>
            </Link>
          </div>
        </div> 
    );
  }
}

export default(Home);
