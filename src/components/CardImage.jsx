import React from "react";
import { paginate } from "../utils/paginate";
import { NavLink } from "react-router-dom";
import "../css/Card.css";
import { CardData } from "./CardData";
const CardImage = ({ pageSize, currentPage, itemsCount }) => {
  const paginatdData = paginate(CardData, currentPage, pageSize);
  return (
    <div className="card">
      {paginatdData.map((card) => {
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
              <NavLink to={`/product/${card.id}`} className="card__button">
                Buy Now
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardImage;
