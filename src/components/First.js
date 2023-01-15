import React from "react";
import "../components/First.scss";
const First = ({ monster }) => {
  const { id, email, name } = monster;
  return (
    <div className="cardBox">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2 className="name font">{name}</h2>
      <p className="email font">{email}</p>
    </div>
  );
};

export default First;
