import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const getMonster = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(response.data);
    };

    getMonster();
  }, []);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={handleChange} userInput={userInput} />
      <CardList monsters={monsters} userInput={userInput} />
    </div>
  );
}

export default Monsters;
