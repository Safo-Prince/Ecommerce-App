import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/ProductDetail.css";
import { CardData } from "./CardData";
import { useDispatch } from "react-redux";
import * as actions from "../store/items";

const ProductDetail = () => {
  const { id } = useParams();
  const product = CardData.filter((product) => product.id == id);
  const productItem = product[0];
  const [cartButton, setCartButton] = useState("Add to Cart");
  const dispatch = useDispatch();

  const handleCartButton = (product) => {
    if (cartButton == "Add to Cart") {
      dispatch(actions.addItem(productItem));
      console.log(actions.addItem(productItem));
      setCartButton("Remove from Cart");
    } else {
      dispatch(actions.deleteItem(productItem));
      console.log(actions.deleteItem(productItem));
      setCartButton("Add to Cart");
    }

    // setCartButton(
    //   cartButton === "Add to Cart" ? "Remove from Cart" : "Add to Cart"
    // );
  };

  return (
    <>
      <main className="productdetail">
        <section>
          <img
            className="productdetail__image"
            src={productItem.image}
            alt=" link not found "
            height="600"
            width="600"
          />
        </section>
        <section className="productdetail__info">
          <h2> {productItem.name} </h2>
          <div className="productdetail__line"></div>
          <h3> ${productItem.price}</h3>
          <div className="productdetail__description">
            <p>{productItem.desc}</p>
          </div>
          <button
            onClick={handleCartButton}
            className={`productdetail__button ${
              cartButton === "Remove from Cart" ? "cartbutton--active" : null
            }`}
          >
            {cartButton}
          </button>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
