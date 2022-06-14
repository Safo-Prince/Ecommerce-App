import React from "react";
import AiOutlineClose from "@meronex/icons/ai/AiOutlineClose";
import "../../css/Modal.css";
import AiOutlineGoogle from "@meronex/icons/ai/AiOutlineGoogle";
import BilFacebook from "@meronex/icons/bi/BilFacebook";
const SigninModal = ({ setIsOpen }) => {
  return (
    <>
      <div className="modal" onClick={() => setIsOpen(false)}>
        <div className="modal--signupDialog">
          <div className="modal--content" onClick={() => setIsOpen(true)}>
            <div className="modal--header">
              <h3> Login</h3>
              <span>
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="modal--headerCloseButton"
                />
              </span>
            </div>
            <div className="modal--body">
              <div className="modal--bodySignInButtons">
                <button className="SignInButton">
                  <span>
                    <AiOutlineGoogle className="signIcon" />
                  </span>
                  Sign in With Google
                </button>
                <button className="SignInButton">
                  <span>
                    <BilFacebook className="signIcon" />
                  </span>
                  Sign in With facebook
                </button>
              </div>
              <div className="modal--bodyform">
                <form>
                  <div className="modal--bodyFormGroup">
                    <label> Email Address</label>
                    <input type="text" />
                    <small>
                      {" "}
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="modal--bodyFormGroup">
                    <label> Password</label>
                    <input type="text" />
                  </div>
                  <div className="modal--bodyFormCheck">
                    <input type="checkbox"></input>
                    <label> check me out</label>
                  </div>
                </form>
              </div>
              <div>
                <button className="modal--bodSubmitButton" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninModal;
