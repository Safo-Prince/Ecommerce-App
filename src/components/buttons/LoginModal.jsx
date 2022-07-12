import React, { useState } from "react";
import Joi from "joi-browser";
import AiOutlineClose from "@meronex/icons/ai/AiOutlineClose";
import "../../css/Modal.css";
import AiOutlineGoogle from "@meronex/icons/ai/AiOutlineGoogle";
import BilFacebook from "@meronex/icons/bi/BilFacebook";

const LoginModal = ({ setIsOpen }) => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(account, schema, options);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const handleUsernameChange = (e) => {
    setAccount({ ...account, username: e.currentTarget.value });
  };
  const handlePasswordChange = (e) => {
    setAccount({ ...account, password: e.currentTarget.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    setError(errors);
    if (errors) return;

    console.log("Submitted");
  };

  return (
    <>
      <div className="modal">
        <div className="modal--loginDialog">
          <div className="modal--content">
            <div className="modal--header">
              <h3> Register</h3>
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
                <form onSubmit={handleSubmit}>
                  <div className="modal--bodyFormGroup">
                    <label htmlFor="username"> Username</label>
                    <input
                      id="username"
                      onChange={handleUsernameChange}
                      value={account.username}
                      type="text"
                      autoFocus
                    />
                  </div>
                  {error && (
                    <div className="form__alert"> {error.username} </div>
                  )}
                  <div className="modal--bodyFormGroup">
                    <label htmlFor="Email"> Email Address</label>
                    <input type="text" />
                    <small>
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="modal--bodyFormGroup">
                    <label htmlFor="password"> Password</label>
                    <input
                      onChange={handlePasswordChange}
                      value={account.password}
                      id="password"
                      type="text"
                    />
                    {error && (
                      <div className="form__alert"> {error.password} </div>
                    )}
                  </div>
                  <div className="modal--bodyFormCheck">
                    <input type="checkbox"></input>
                    <label> check me out</label>
                  </div>
                  <button className="modal--bodSubmitButton" type="submit">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginModal;
