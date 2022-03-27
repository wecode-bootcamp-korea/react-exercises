import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  const fetchData = () => {
    async function fetchAndSetUser() {
      const postResponse = await fetch("https://jsonplaceholder.typicode.com/users")
      const post = await postResponse.json();
      userInput? setMonsters(filteredArrayMosters):setMonsters(post);
    }
    fetchAndSetUser();
  }

  useEffect(() => {
    fetchData()
  })

  const handleChange = (e) => {
    const { value } = e.target;
    setUserInput((value))
  }

  const filteredArrayMosters = monsters.filter((x) =>
    x.name.toLowerCase().includes(userInput.toLowerCase())
  );

  return (
    <div className="monsters">
      <h1>컴포넌트 재사용 연습!</h1>
      <SearchBox handleChange={handleChange} />
      <CardList monsters={monsters}/>
    </div>
  );
}

export default Monsters;
