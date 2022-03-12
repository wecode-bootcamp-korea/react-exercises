import React from "react";
// import Monsters from "../../Monsters";
import Card from "../Card/Card";
import "./CardList.scss";

function CardList({ monsters }) {
  return (
    <div className="cardList">
      {monsters.map((monster) => {
        return (
          <Card
            key={monster.id}
            id={monster.id}
            name={monster.name}
            email={monster.email}
          />
        );
      })}
    </div>
  );
}

export default CardList;
