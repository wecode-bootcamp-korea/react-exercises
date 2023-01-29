import React, { useEffect, useState } from "react";
import "./Monsters.scss";
import CardList from "./components/CardList/CardList";

const Monsters = () => {
  const [monster, setMonster] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const searchMonster = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setMonster(data));
  }, []);

  const filterUser = monster.filter((monster) =>
    monster.name.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        className="search"
        placeholder="Search"
        value={searchKey}
        onChange={searchMonster}
      />
      <CardList monsterList={filterUser} />
    </div>
  );
};

export default Monsters;
