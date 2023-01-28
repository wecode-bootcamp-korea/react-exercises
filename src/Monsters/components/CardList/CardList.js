import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (monsterList) => {
  const {monsterList2} = monsterList;
  console.log(monsterList);
  return (
    <div className="cardList">
      {monsterList2.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
