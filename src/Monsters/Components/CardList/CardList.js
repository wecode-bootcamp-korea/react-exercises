import React from "react";
import { Card } from "../Card/Card";
import "./CardList.scss";

const CardList = ({ monsters }) => {
  return (
    <div className="cardList">
      {monsters.map((monster) => (
        <Card
          key={monster.id}
          id={monster.id}
          name={monster.name}
          email={monster.email}
        />
      ))}
    </div>
  );
};

export { CardList };
