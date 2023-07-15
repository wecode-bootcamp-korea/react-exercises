import React, { useState, useEffect } from "react";
import "./Monsters.scss";

function Monsters() {
  const [monstersData, setMonstersData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonstersData(data));
  }, []);

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input className="search" placeholder="Search" />
      <ul>
        {monstersData.map((monster) => (
          <li className="monster" key={monster.id}>
            <img
              src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              alt={monster.name}
            />
            <p>{monster.name}</p>
            <span>{monster.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Monsters;
