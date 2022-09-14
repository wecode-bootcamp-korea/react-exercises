import React from "react";
// import Monsters from "../../Monsters";
import Card from "../Card/Card";
import "./CardList.scss";

/***********************************************************
  Card 컴포넌트를 import 한 뒤, props로 내려받은 데이터에 
  map 함수를 호출해 각각 다른 데이터를 가진 Card 컴포넌트들을 리턴해주세요!
  Card 컴포넌트에서 필요로 하는 데이터는 id, name, email 입니다.
***********************************************************/

function CardList({monsters, filter}) {
  const monsters2 = monsters.filter(el => el.name.toLowerCase().includes(filter) || el.email.toLowerCase().includes(filter))

  return <div className="cardList">
    {monsters2.map((monster) => (
      <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email} />
    ))}
  </div>;
}

export default CardList;
