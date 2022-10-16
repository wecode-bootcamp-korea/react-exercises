import React from "react";
import "./Card.scss";

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card">
      <img
        className="monsterImage"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
