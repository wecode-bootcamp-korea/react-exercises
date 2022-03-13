import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

function Card({ id, name, email }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`monsters/detail/${id}`);
  };

  return (
    <div className="cardContainer" onClick={goToDetail}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monsters"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
