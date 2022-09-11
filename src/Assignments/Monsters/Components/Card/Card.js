import React from "react";
import "./Card.scss";

function Card({ monsterInfo }) {
  return (
    <div className="cardContainer">
      <img
        src={`https://robohash.org/${monsterInfo.id}?set=set2&size=180x180`}
        alt="몬스터 이미지"
      />
      <h2>{monsterInfo.name}</h2>
      <h2>{monsterInfo.email}</h2>
    </div>
  );
}

export default Card;
