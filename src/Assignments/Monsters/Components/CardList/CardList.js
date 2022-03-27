import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

function CardList(props) {
  const {monsters} = props;
  return (
    <div className="cardList">
      {monsters.map((monster) => {
      return (
        <Card key={monster.id} {...monster} />
      )
    })}
    </div>
  );
}

export default CardList;
