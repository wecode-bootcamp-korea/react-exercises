import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(function (result) {
        return setMonsters(result);
      });
  }, []);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const filterMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(userInput);
  });

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={handleUserInput} />
      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default Monsters;
