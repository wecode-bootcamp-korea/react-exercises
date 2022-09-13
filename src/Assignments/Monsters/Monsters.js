import React, { useEffect, useState } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  function handleChange(e) {
    setUserInput(e.taget.value);
  }

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(userInput.toLowerCase());
  });

  return (
    <div className="monsters">
      <SearchBox userInput={userInput} handleChange={handleChange} />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default Monsters;
