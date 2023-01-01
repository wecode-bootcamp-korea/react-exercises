import React, { useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsterList, setMonsterList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsterList(data));
  }, []);

  const monsterSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filterItem = monsterList.filter((item) =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="monsters">
      <h1 className="title">Monsters</h1>
      <input
        className="search"
        value={searchKeyword}
        placeholder="Search"
        onChange={monsterSearch}
      />
      <CardList monsterList={filterItem} />
    </div>
  );
}

export default Monsters;
