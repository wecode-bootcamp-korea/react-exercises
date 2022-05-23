import React from "react";
import "./Card.scss";

function Card({ name, email, id }) {
  return <div className="cardContainer">
    <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster"/>
    <h2>{name}</h2>
    <p>{email}</p>
  </div>;
}

export default Card;
