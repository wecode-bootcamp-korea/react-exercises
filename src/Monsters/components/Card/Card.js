import React from 'react';
import './Card.scss';

const Card = monster => {
  const { id, name, email } = monster;
  console.log(monster);
  console.log(email);
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
        className="monsterImage"
      />
      <div className="text">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
