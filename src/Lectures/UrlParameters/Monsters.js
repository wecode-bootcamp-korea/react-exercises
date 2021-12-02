import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

export default function Monsters() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setMonsters(res));
  }, []);

  return (
    <div className="monsters">
      <h1>Mini Project - Monsters</h1>
      <SearchBox />
      <CardList monsters={monsters} />
    </div>
  );
}
