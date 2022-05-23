import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

function CardList({monsters}) {
  return <div className="cardList">
    {monsters.map((monster)=>{
      return( 
        <Card 
          key={monster.id}
          name={monster.name}
          email={monster.email}
          id={monster.id}
        />
      )
      })
    }
  </div>;
  
}

export default CardList;
