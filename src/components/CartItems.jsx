import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../css/proceedToCheckoutButtton.css";
import GrClose from "@meronex/icons/gr/GrClose";
import * as actions from "../store/items";

const CartItems = () => {
  const products = useSelector((state) => state.selctedProducts);
  const dispatch = useDispatch();

  const handleDeleteItem = (product) => {
    dispatch(actions.deleteItem(product));
  };
  return (
    <>
      {products.map((item) => (
        <div className="cartContents">
          <div className="Image">
            <img width="400" height="400" src={item.image} alt="" />
          </div>
          <div className="itemName">
            <h3> {item.name}</h3>
            <h4>${item.price}</h4>
          </div>
          <button
            onClick={() => handleDeleteItem(item)}
            className="closeButton"
          >
            <GrClose />
          </button>
        </div>
      ))}

      <div className="proceedToCheckoutButtton">
        <NavLink className="proceedToCheckoutButtton--button" to="/checkout">
          Proceed To checkout
        </NavLink>
      </div>
    </>
  );
};

export default CartItems;
