import React from "react";
import "./Card.scss";

const Card = ({ id, name, email }) => {
  return (
    <div className="card">
      <img
        className="cardImg"
        alt="Monster Img"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      ></img>
      <p className="cardName">{name}</p>
      <p className="cardEmail">{email}</p>
    </div>
  );
};

export { Card };
