import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

   // 데이터 로딩
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setMonsters(data));
  },[]);

  // SearchBox 에 props로 넘겨줄 handleChange 메소드 정의
  const searchBarInput = function(e) {
    setUserInput(e.target.value);
  }

  const searchMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(userInput.toLowerCase());
  })

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={searchBarInput} />
      <CardList monsters={searchMonster}/> 
    </div>
  );
}


export default Monsters;
