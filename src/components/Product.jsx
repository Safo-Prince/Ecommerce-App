import React from "react";
import Card from "./Card";
import "../css/Product.css";

const Product = () => {
 

  return (
    <>
      <div className="product">
        <div className="name">
          <h2> Product</h2>
        </div>
        <div className="product__line"></div>
        <Card />
        
      </div>
    </>
  );
};

export default Product;
