import React from "react";
import Card from "../Card/Card";
import './CardList.scss';

const CardList = ({ serch }) => {
  return (
    <div className="cardList">
      {serch.map((item) => (
        <Card key={item.id} monsterCard={item} />
      ))}
    </div>
  );
};

export default CardList;