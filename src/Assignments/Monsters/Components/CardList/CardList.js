import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

function CardList({ monsters }) {
  return (
    <div className="cardList">
      {monsters.map((monsters) => {
        return (
          <Card
            key={monsters.id}
            id={monsters.id}
            name={monsters.name}
            email={monsters.email}
          />
        );
      })}
    </div>
  );
}

export default CardList;
