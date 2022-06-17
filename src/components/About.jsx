import React from "react";
import { NavLink } from "react-router-dom";
import "../css/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <h3>About Us</h3>
        <p className="about__paragraph">
          Apple Inc. is an American multinational technology company that
          specializes in consumer electronics, software and online services
          headquartered in Cupertino, California, United States. Apple is the
          largest technology company by revenue (totaling US$365.8 billion in
          2021) and as of May 2022, it is the world's second most valuable
          company, the fourth-largest personal computer vendor by unit sales and
          second-largest mobile phone manufacturer. It is one of the Big Five
          American information technology companies, alongside Alphabet, Amazon,
          Meta, and Microsoft. Apple was founded as Apple Computer Company on
          April 1, 1976, by Steve Jobs, Steve Wozniak and Ronald Wayne to
          develop and sell Wozniak's Apple I personal computer. It was
          incorporated by Jobs and Wozniak as Apple Computer, Inc. in 1977 and
          the company's next computer, the Apple II became a best seller. Apple
          went public in 1980, to instant financial success. The company
          developed computers featuring innovative graphical user interfaces,
          including the original Macintosh, announced in a critically acclaimed
          advertisement, "1984", directed by Ridley Scott. By 1985, the high
          cost of its products and power struggles between executives caused
          problems. Wozniak stepped back from Apple amicably and pursued other
          ventures, while Jobs resigned bitterly and founded NeXT, taking some
          Apple employees with him. As the market for personal computers
          expanded and evolved throughout the 1990s, Apple lost considerable
          market share to the lower-priced duopoly of the Microsoft Windows
          operating system on Intel-powered PC clones (also known as "Wintel").
        </p>
        <div className="about__button">
          <NavLink className="about__nav" to="/contact">
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="about__image">
        <img
          src="https://images.unsplash.com/photo-1630332159758-c02a3accc8fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
          alt="Link is broken"
          width="600"
          height="600"
        />
      </div>
    </div>
  );
};

export default About;
