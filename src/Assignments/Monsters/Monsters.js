import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");
  
  let filteredMonsters = monsters.filter(function(list){
    return list.name.toLowerCase().includes(userInput.toLowerCase());
  })
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => userInput ? setMonsters(filteredMonsters) : setMonsters(data))
  },[userInput])

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  
  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={handleChange} userInput={userInput} />
      <CardList monsters={monsters} userInput={userInput} />
    </div>
  );
}

export default Monsters;
