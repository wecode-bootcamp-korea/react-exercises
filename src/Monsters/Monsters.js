import React, { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setMonsterList(data));
  }, []);

  const monsterSearch = (e) => {
    setSearch(e.target.value);
  };
  const monsterFilter = monsterList.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input className="search" placeholder="Search" onChange={monsterSearch} />
      <CardList monsterList={monsterFilter} />
    </div>
  );
}

export default Monsters;
