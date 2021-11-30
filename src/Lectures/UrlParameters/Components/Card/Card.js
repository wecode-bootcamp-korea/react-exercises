import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="cardContainer">
      <img
        src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
        alt=""
      />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
