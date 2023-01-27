import React, { useState, useEffect } from "react";
import "./Monsters.scss";
import { CardList } from "./Components/CardList/CardList";

const Monsters = () => {
  const [monsterList, setMonsterList] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setMonsterList(json));
  }, []);

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const filteredList = monsterList.filter((monster) =>
    monster.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="monsters">
      <header className="header">
        <h1 className="h1">Monsters</h1>
        <input
          className="searchInput"
          value={keyword}
          type="text"
          placeholder="Search"
          onChange={onChange}
        ></input>
      </header>
      {filteredList.length === 0 ? (
        <p className="no">No results found</p>
      ) : (
        <CardList monsters={filteredList} />
      )}
    </div>
  );
};

export default Monsters;
