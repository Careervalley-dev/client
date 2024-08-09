import React from "react";
import "./cityCard.css";
import { Link } from "react-router-dom";

const CityCard = ({ imgLink, title, desc, pageUrl }) => {
  return (
    <section id="card_a" className="card_a">
      <img src={imgLink} className="card__image" />
      <div className="card__content">
        <Link to={pageUrl}>
          <p className="card__title text-white">{title}</p>
        </Link>
        <p className="card__description">{desc}</p>
      </div>
    </section>
  );
};

export default CityCard;
