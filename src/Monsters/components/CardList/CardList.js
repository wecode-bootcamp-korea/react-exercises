import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

const CardList = monsterList => {
  const { monsterListArray } = monsterList;
  console.log(monsterList);
  console.log(monsterListArray);
  return (
    <div className="cardList">
      {monsterListArray.map(monster => (
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

export default CardList;
