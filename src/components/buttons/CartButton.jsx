import React from "react";
import { NavLink } from "react-router-dom";
import HiOutlineShoppingCart from "@meronex/icons/hi/HiOutlineShoppingCart";
import "../../css/CartButton.css";

const CartButton = () => {
  return (
    <>
      <div className="cart ">
        <button className="cartButton ">
          <div className="cartButton__icon">
            <HiOutlineShoppingCart />
          </div>
          Cart (0)
          <NavLink to="/"></NavLink>
        </button>
      </div>
    </>
  );
};

export default CartButton;
