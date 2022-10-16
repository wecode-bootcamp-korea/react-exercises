import React from "react";
import "./CardList.scss";

const CardList = ({ id, name, email }) => {
  return (
    <div className="cardlist-box">
      <img
        className="cardList-img"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <div className="cardList-name">{name}</div>
      <div>{email}</div>
    </div>
  );
};

export default CardList;
