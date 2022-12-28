import React, { useState, useEffect } from "react";
import "./Monsters.scss";

const Card = ({ id, name, email }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
};

function Monsters() {
  const [words, setWords] = useState("");
  const onChange = (event) => {
    setWords(event.target.value);
  };
  const [monsterList, setMonsterList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setMonsterList(result));
  }, []);

  const filteredItem = monsterList.filter((monster) =>
    monster.name.toLowerCase().includes(words.toLowerCase())
  );

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        className="search"
        placeholder="Search"
        value={words}
        onChange={onChange}
      />
      <div className="contents">
        {filteredItem.map((monster) => (
          <Card
            className="card"
            key={monster.id}
            id={monster.id}
            name={monster.name}
            email={monster.email}
          />
        ))}
      </div>
    </div>
  );
}

export default Monsters;
