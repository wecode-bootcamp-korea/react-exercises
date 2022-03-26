import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  // 데이터 로딩
  const fetchData = async () => {
    const data = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    setMonsters(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setUserInput((cur) => (cur = value));
  };

  const filteredMonsters = () =>
    monsters.filter((x) =>
      x.name.toLowerCase().includes(userInput.toLowerCase())
    );

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={handleChange} />
      <CardList
        userInput={userInput}
        monsters={monsters}
        filteredMonsters={filteredMonsters}
      />
    </div>
  );
}

export default Monsters;
