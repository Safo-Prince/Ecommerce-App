import React from "react";
import "../css/Card.css";
import { CardData } from "./CardData";

const Card = () => {
  console.log(CardData);
  return (
    <div className="card">
      {CardData.map((card) => {
        return (
          <div className="card__content">
            <div className="card__contentImage">
              <img
                src={card.image}
                width="300"
                height="300"
                className="card__image"
                alt=" Link is broken"
              />
            </div>
            <div className="card__contentBody">
              <h5 className="card__name"> {card.name}</h5>
              <h6 className="card__price">${card.price}</h6>
              <button className="card__button"> Buy Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
