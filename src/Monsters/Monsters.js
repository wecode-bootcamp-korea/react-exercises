import React, { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);
  const [searchlog, setSearchlog] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setMonsterList(data));
  }, []);

  const saveSearchlog = (event) => {
    setSearchlog(event.target.value);
  };

  const filteredItem = monsterList.filter((monster) =>
    monster.name.toLowerCase().includes(searchlog.toLowerCase())
  );

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        className="search"
        placeholder="Search"
        value={searchlog}
        onChange={saveSearchlog}
      />
      <CardList monsterList={filteredItem} />
    </div>
  );
}

export default Monsters;
