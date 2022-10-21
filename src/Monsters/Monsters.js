import React, { useEffect, useState } from "react";
import MonsterLists from "./MonsterLists";
import "./Monsters.scss";

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setMonsterList(data));
  }, []);

  const saveSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredItem = monsterList.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="monsters">
        <h1 className="title">Monsters</h1>
        <input
          className="search"
          placeholder="search"
          value={search}
          onChange={saveSearch}
        />

        <MonsterLists m={filteredItem} />
      </div>
    </>
  );
}

export default Monsters;
