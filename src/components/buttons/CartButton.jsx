import React from "react";
import { NavLink } from "react-router-dom";
import HiOutlineShoppingCart from "@meronex/icons/hi/HiOutlineShoppingCart";
import "../../css/CartButton.css";
import { useSelector } from "react-redux";

const CartButton = () => {
  const products = useSelector((state) => state.selctedProducts);

  return (
    <>
      <NavLink className="cart" to="/cart">
        <div>
          <button className="cartButton ">
            <div className="cartButton__icon">
              <HiOutlineShoppingCart />
            </div>
            Cart ({products.length})
          </button>
        </div>
      </NavLink>
    </>
  );
};

export default CartButton;
