import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../css/proceedToCheckoutButtton.css";

const CartItems = (sam) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.selctedProducts);
  return (
    <>
      <img src={products.image} alt="" />
      <div className="proceedToCheckoutButtton">
        <NavLink className="proceedToCheckoutButtton--button" to="/checkout">
          Proceed To checkout
        </NavLink>
      </div>
    </>
  );
};

export default CartItems;
