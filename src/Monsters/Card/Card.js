import React, { useState, useEffect } from "react";
import CardList from "../CardList/CardList";
import "./Card.scss";

const Card = ({ comment }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setList(data));
  }, []);

  const filterList = list.filter((monster) => {
    return monster.name.toLowerCase().includes(comment.toLowerCase());
  });

  return (
    <div className="wrap">
      <div className="card-box">
        {filterList.map((item) => (
          <CardList id={item.id} name={item.name} email={item.email} />
        ))}
      </div>
    </div>
  );
};
export default Card;
