import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal";
import FiUserPlus from "@meronex/icons/fi/FiUserPlus";
import "../../css/Modal.css";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="login">
        <button className="login--button" onClick={() => setIsOpen(true)}>
          <div className="login--buttonIcon">
            <FiUserPlus />
          </div>
          Register
          <NavLink to="/"></NavLink>
        </button>
        {isOpen && <LoginModal setIsOpen={setIsOpen} />}
      </div>
    </>
  );
};

export default Login;
