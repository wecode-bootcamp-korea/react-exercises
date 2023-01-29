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
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
