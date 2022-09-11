import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

function CardList({ filteredMonster }) {
  return (
    <div className="cardList">
      {filteredMonster.map((monsterInfo) => (
        <Card key={monsterInfo.id} monsterInfo={monsterInfo} />
      ))}
    </div>
  );
}

export default CardList;
