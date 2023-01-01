import React from "react";
import Monsters from "../../Monsters";
import Card from "../Card/Card";
import "./CardList.scss";

export default function CardList({ monsterList }) {
  return (
    <div className="CardList">
      {monsterList.map((item) => (
        <Card key={item.id} monster={item} />
      ))}
    </div>
  );
}
