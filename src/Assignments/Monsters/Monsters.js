import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  const onChange = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const filteredMonster =
    userInput.length === 0
      ? monsters
      : monsters.filter((monster) =>
          monster.name.toLowerCase().includes(userInput)
        );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox onChange={onChange} />
      <CardList filteredMonster={filteredMonster} />
    </div>
  );
}

export default Monsters;
