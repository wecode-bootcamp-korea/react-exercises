import React from "react";
import "./Card.scss";

function Card({ monster }) {
  const { name, email, id } = monster;

  return (
    <div className="card">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

export default Card;
