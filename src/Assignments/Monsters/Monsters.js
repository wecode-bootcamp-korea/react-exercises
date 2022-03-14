import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  // 데이터 로딩

  // SearchBox 에 props로 넘겨줄 handleChange 메소드 정의

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);

  const updateUserInput = (e) => {
    setUserInput(e.target.value);
  };

  //userInput에 검색한 이름이 담김
  // console.log(userInput);

  const sortMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(userInput);
  });

  // console.log(`sortMonster의 value는 ->`, sortMonster);

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={updateUserInput} />
      {/* <CardList monsters={monsters} /> */}
      <CardList monsters={sortMonster} />
    </div>
  );
}

export default Monsters;
