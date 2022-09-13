import React from "react";
import "./Card.scss";

function Card({ id, name, email }) {
  return (
    <div className="cardContainer" id={id} name={name} email={email}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="#"
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
