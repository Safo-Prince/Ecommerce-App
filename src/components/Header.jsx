import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
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
        <span className="navbar__">APPLE MART</span>
      </div>
    </nav>
  );
};

export default Header;
