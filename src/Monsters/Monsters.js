import React, { useState } from "react";
import "./Monsters.scss";
import Card from "./Card/Card";

function Monsters() {
  const [comment, setComment] = useState("");

  const onComment = (e) => {
    setComment(e.target.value);
  };
  return (
    <>
      <div className="monsters">
        <h1 className="title">Monsters</h1>
        <input
          className="search"
          placeholder="Search"
          value={comment}
          onChange={onComment}
        />
      </div>
      <div className="card">
        <Card comment={comment} className="cardList-box" />
      </div>
    </>
  );
}

export default Monsters;
