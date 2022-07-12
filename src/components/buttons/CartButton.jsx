import React from "react";
import { NavLink } from "react-router-dom";
import HiOutlineShoppingCart from "@meronex/icons/hi/HiOutlineShoppingCart";
import "../../css/CartButton.css";
import { useSelector } from "react-redux";

const CartButton = () => {
  const products = useSelector((state) => state.selctedProducts);
  console.log(products);
  return (
    <>
      <div className="cart ">
        <button className="cartButton ">
          <div className="cartButton__icon">
            <HiOutlineShoppingCart />
          </div>
          Cart ({products.length})<NavLink to="/"></NavLink>
        </button>
      </div>
    </>
  );
};

export default CartButton;
