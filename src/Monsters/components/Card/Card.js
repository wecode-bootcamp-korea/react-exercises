import "./Card.scss";
import React from "react";

const Card = ({ monster }) => {
  const { id, email, name } = monster;
  console.log(monster);
  return (
    <div className="card">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
