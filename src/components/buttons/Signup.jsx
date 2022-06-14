import React, { useState } from "react";
import Modal from "./SignUpModal";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="primarybtn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Signup;
