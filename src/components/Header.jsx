import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import CartButton from "./buttons/CartButton";

import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar__items">
        <div className="navbar__links">
          <ul>
            <li>
              <NavLink className="navbar__link" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/product">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <span className="navbar__brandName">APPLE MART</span>
        <div className="navbar__buttons">
          <div className="navbar__button">
            <Signup />
          </div>
          <div className="navbar__button">
            <Login />
          </div>
          <div className="navbar__button">
            <CartButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
