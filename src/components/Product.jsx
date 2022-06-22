import React from "react";
import Card from "./Card";
import Header from "./Header";
import "../css/Product.css";
import Pagination from "./Pagination";

const Product = () => {
  return (
    <>
      <div className="product">
        <div className="name">
          <h2> Product</h2>
        </div>
        <div className="product__line"></div>
        <Card />
        <Pagination/>
      </div>
    </>
  );
};

export default Product;
