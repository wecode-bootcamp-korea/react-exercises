import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

function CardList({ monsters, userInput }) {
  const searchName = [...monsters];

  const filterTitle = searchName.filter((names) => {
    return names.name
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(userInput.toLocaleLowerCase().replace(" ", ""));
  });

  return (
    <div className="cardList">
      {filterTitle.map((monster) => (
        <Card
          key={monster.id}
          id={monster.id}
          name={monster.name}
          email={monster.email}
        />
      ))}
    </div>
  );
}

export default CardList;
