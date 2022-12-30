import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

function CardList({ monsterList }) {
  return (
    <div className='cardList'>
      {monsterList.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
