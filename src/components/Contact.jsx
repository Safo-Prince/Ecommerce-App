import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <header className="contact__header">
          <h2> Have Some Question?</h2>
          <div className="contact__straightline"></div>
        </header>
        <main className="contact__main">
          <section className="contact__mainImage">
            <img
              src="https://images.unsplash.com/photo-1498230870289-7561110a6e69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="not found"
              width="800"
              height="800"
            ></img>
          </section>
          <section className="contact__mainForm">
            <div className="contact__mainformGroup">
              <label>Full Name</label>
              <input placeholder="Safo Prince" />
            </div>
            <div className="contact__mainformGroup">
              <label>Email Address</label>
              <input placeholder="name@gmail.com" type="email" />
            </div>
            <div className="contact__mainformGroup">
              <label htmlFor=""> Example Text Area</label>
            </div>
            <textarea
              className="contact__textarea"
              name=""
              id=""
              cols="60"
              rows="10"
            ></textarea>
            <div className="contact__button">
              <button className="contact__button">Send Message</button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
