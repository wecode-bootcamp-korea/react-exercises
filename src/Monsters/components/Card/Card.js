import "./Card.scss";

import React from "react";

function Card({ card: { id, name, email } }) {
  return (
    <>
      <div className="card_box">
        <img
          className="monster_img"
          src={`https://robohash.org/${id}?set=set2&size=180x180
`}
          alt="monster_img"
        />
        <h1 className="name">{name}</h1>
        <p className="email">{email}</p>
      </div>
    </>
  );
}

export default Card;
