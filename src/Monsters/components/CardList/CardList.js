import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

const CardList = monsterList => {
  const { monsterListArray } = monsterList;
  console.log(monsterList);
  return (
    <div className="cardList">
      {monsterListArray &&
        monsterListArray.map(monster => (
          <Card key={monster.id} monster={monster} />
        ))}
    </div>
  );
};

export default CardList;
