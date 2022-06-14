import React, { useState } from "react";
import SigninModal from "./SigninModal";
import EnLogin from "@meronex/icons/en/EnLogin";
import "../../css/signup.css";
const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Signup">
      <button className="signup--button" onClick={() => setIsOpen(true)}>
        <div className="signup--buttonIcon">
          <EnLogin />
        </div>
        Login
      </button>
      {isOpen && <SigninModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Signup;
