import React from "react";
import "./Card.scss";

function Card({ handleCard, id, name, email }) {
  return (
    <div
      className="cardContainer"
      onClick={() => {
        handleCard(id);
      }}
    >
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
